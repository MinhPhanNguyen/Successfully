import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { IoMenu } from "react-icons/io5";
import { MdWc } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BiSolidCommentAdd } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaWalking } from "react-icons/fa";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { memo } from "react";

const Menu = ({ status, location, title, odo, rate, position, onClick }) => {
  return (
    <div className="Content" onClick={onClick}>
      <h3>{title}</h3>
      <div className="StautsType">
        <div className="status-badge">
          <p className={status.toLowerCase()}>{status}</p>
        </div>
        <div className="location-badge">
          <p>{location}</p>
        </div>
      </div>
      <div className="OdoType">
        <div className="distance-badge">
          <FaWalking />
          <p>{odo} km</p>
        </div>
        <div className="rating-badge">
          <p>{rate}</p>
          <FaStar className="star-icon" />
        </div>
      </div>
    </div>
  );
};

const MapController = ({ selectedLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.flyTo(selectedLocation.position, 16);
    }
  }, [selectedLocation, map]);

  return null;
};

const LocationMarker = ({ setUserLocation }) => {
  const map = useMap();

  useEffect(() => {
    map.locate({ setView: true });
  }, [map]);

  useMapEvents({
    locationfound: (e) => {
      setUserLocation(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return null;
};

const RoutingMachine = ({ userLocation, destination }) => {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (!map || !userLocation || !destination) return;

    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
    }

    const waypoints = [
      L.latLng(userLocation.lat, userLocation.lng),
      L.latLng(destination[0], destination[1]),
    ];

    routingControlRef.current = L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: false,
      lineOptions: {
        styles: [{ color: "#0088ff", weight: 4, opacity: 0.7 }],
      },
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).addTo(map);

    return () => {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
    };
  }, [map, userLocation, destination]);

  return null;
};

// Định nghĩa icon cho marker
const restroomIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const userIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const GoogleMap = () => {
  const [activeMenu, setActiveMenu] = useState("Mở Rộng");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [showRoute, setShowRoute] = useState(false);
  const mapRef = useRef(null);
  const thuDucPosition = [10.8499, 106.7718];
  const [nearbyRestrooms, setNearbyRestrooms] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  const vietnamBounds = {
    maxBounds: [
      [23.3926, 100.093], // Tây Bắc
      [8.5786, 109.4688], // Đông Nam
    ],
    minZoom: 6,
    maxZoom: 18,
  };

  const restroomLocations = [
    {
      position: [10.8472, 106.7718],
      name: "Nhà vệ sinh công cộng - Đại học Quốc gia",
      status: "Free",
      location: "Đại học Quốc gia TPHCM",
      odo: "0.2",
      rate: "4.5",
      details: {
        openTime: "6:00 - 22:00",
        price: "Miễn phí",
        facilities: ["Toilet ngồi", "Bồn rửa tay", "Gương"],
        gender: "Nam/Nữ riêng biệt",
        cleanliness: "Sạch sẽ",
        security: "Có bảo vệ",
        lastCleaned: "1 giờ trước",
      },
    },
    {
      position: [10.8527, 106.7716],
      name: "WC Vincom Thủ Đức",
      status: "Paid",
      location: "216 Võ Văn Ngân, Bình Thọ",
      odo: "0.5",
      rate: "4.8",
      details: {
        openTime: "8:00 - 22:00",
        price: "5,000 VND",
        facilities: ["Toilet ngồi", "Bồn rửa tay", "Gương", "Máy sấy tay"],
        gender: "Nam/Nữ riêng biệt",
        cleanliness: "Rất sạch sẽ",
        security: "Có bảo vệ 24/7",
        lastCleaned: "30 phút trước",
      },
    },
    {
      position: [10.8469, 106.7751],
      name: "Nhà vệ sinh - Đại học Bách Khoa",
      status: "Free",
      location: "Đại học Bách Khoa",
      odo: "0.3",
      rate: "4.2",
      details: {
        openTime: "6:00 - 22:00",
        price: "Miễn phí",
        facilities: ["Toilet ngồi", "Bồn rửa tay", "Gương"],
        gender: "Nam/Nữ riêng biệt",
        cleanliness: "Sạch sẽ",
        security: "Có bảo vệ",
        lastCleaned: "1 giờ trước",
      },
    },
    {
      position: [10.8515, 106.7689],
      name: "WC Bệnh viện Đa khoa Thủ Đức",
      status: "Free",
      location: "Bệnh viện Th Đức",
      odo: "0.7",
      rate: "4.0",
      details: {
        openTime: "6:00 - 22:00",
        price: "Miễn phí",
        facilities: ["Toilet ngồi", "Bồn rửa tay", "Gương"],
        gender: "Nam/Nữ riêng biệt",
        cleanliness: "Sạch sẽ",
        security: "Có bảo vệ",
        lastCleaned: "1 giờ trước",
      },
    },
    {
      position: [10.8491, 106.7682],
      name: "Nhà vệ sinh - Chợ Thủ Đức",
      status: "Paid",
      location: "Chợ Thủ Đức",
      odo: "0.4",
      rate: "3.8",
      details: {
        openTime: "6:00 - 22:00",
        price: "Miễn phí",
        facilities: ["Toilet ngồi", "Bồn rửa tay", "Gương"],
        gender: "Nam/Nữ riêng biệt",
        cleanliness: "Sạch sẽ",
        security: "Có bảo vệ",
        lastCleaned: "1 giờ trước",
      },
    },
    {
      position: [10.8508, 106.7729],
      name: "WC Công viên Thủ Đức",
      status: "Free",
      location: "Công viên Thủ Đức",
      odo: "0.6",
      rate: "4.3",
      details: {
        openTime: "6:00 - 22:00",
        price: "Miễn phí",
        facilities: ["Toilet ngồi", "Bồn rửa tay", "Gương"],
        gender: "Nam/Nữ riêng biệt",
        cleanliness: "Sạch sẽ",
        security: "Có bảo vệ",
        lastCleaned: "1 giờ trước",
      },
    },
    {
      position: [10.8483, 106.7705],
      name: "Nhà vệ sinh - Nhà Văn hóa Thanh niên",
      status: "Free",
      location: "Nhà Văn hóa Thanh niên",
      odo: "0.3",
      rate: "4.1",
      details: {
        openTime: "6:00 - 22:00",
        price: "Miễn phí",
        facilities: ["Toilet ngồi", "Bồn rửa tay", "Gương"],
        gender: "Nam/Nữ riêng biệt",
        cleanliness: "Sạch sẽ",
        security: "Có bảo vệ",
        lastCleaned: "1 giờ trước",
      },
    },
    {
      position: [10.8462, 106.7735],
      name: "WC Siêu thị CoopMart",
      status: "Free",
      location: "CoopMart Thủ Đức",
      odo: "0.5",
      rate: "4.4",
      details: {
        openTime: "6:00 - 22:00",
        price: "Miễn phí",
        facilities: ["Toilet ngồi", "Bồn rửa tay", "Gương"],
        gender: "Nam/Nữ riêng biệt",
        cleanliness: "Sạch sẽ",
        security: "Có bảo vệ",
        lastCleaned: "1 giờ trước",
      },
    },
    {
      position: [10.8445, 106.7722],
      name: "Nhà vệ sinh - Ga Metro Thủ Đức",
      status: "Paid",
      location: "Ga Metro",
      odo: "0.8",
      rate: "4.6",
      details: {
        openTime: "6:00 - 22:00",
        price: "Miễn phí",
        facilities: ["Toilet ngồi", "Bồn rửa tay", "Gương"],
        gender: "Nam/Nữ riêng biệt",
        cleanliness: "Sạch sẽ",
        security: "Có bảo vệ",
        lastCleaned: "1 giờ trước",
      },
    },
    {
      position: [10.8536, 106.7725],
      name: "WC Trung tâm Thể dục Thể thao",
      status: "Free",
      location: "TDTT Thủ Đức",
      odo: "0.9",
      rate: "4.2",
      details: {
        openTime: "6:00 - 22:00",
        price: "Miễn phí",
        facilities: ["Toilet ngồi", "Bồn rửa tay", "Gương"],
        gender: "Nam/Nữ riêng biệt",
        cleanliness: "Sạch sẽ",
        security: "Có bảo vệ",
        lastCleaned: "1 giờ trước",
      },
    },
  ];

  // Đảm bảo danh sách địa điểm không bị trùng lặp
  const uniqueLocations = Array.from(
    new Set(restroomLocations.map((loc) => JSON.stringify(loc)))
  ).map((str) => JSON.parse(str));

  const ListMenu = {
    "Mở Rộng": restroomLocations.map((location) => ({
      status: location.status,
      location: location.location,
      title: location.name,
      odo: location.odo,
      rate: location.rate,
    })),

    "Gần Đây": [
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
    ],

    "Đánh Giá": [
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
    ],

    "Diễn Đàn": [
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
    ],

    "Lịch Sử": [
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
      {
        status: "Free",
        location: "School",
        title: "67 Nguyen Thi Tu",
        odo: "7",
        rate: "5",
      },
    ],
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    if (mapInstance) {
      mapInstance.flyTo(location.position, 16, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  };

  const DetailedPopup = ({ location }) => {
    return (
      <div className="detailed-popup">
        <h3>{location.name}</h3>
        <div className="status-badge">
          <span className={location.status === "Free" ? "free" : "paid"}>
            {location.status === "Free" ? "Miễn phí" : "Có phí"}
          </span>
        </div>

        <div className="info-section">
          <div className="info-row">
            <i className="far fa-clock"></i>
            <span>Giờ mở cửa: {location.details.openTime}</span>
          </div>

          <div className="info-row">
            <i className="fas fa-money-bill"></i>
            <span>Giá: {location.details.price}</span>
          </div>

          <div className="info-row">
            <i className="fas fa-restroom"></i>
            <span>Loại: {location.details.gender}</span>
          </div>

          <div className="facilities">
            <h4>Tiện ích:</h4>
            <ul>
              {location.details.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>

          <div className="info-row">
            <i className="fas fa-broom"></i>
            <span>Vệ sinh lần cuối: {location.details.lastCleaned}</span>
          </div>

          <div className="rating">
            <span className="rate-number">{location.rate}</span>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={index < Math.floor(location.rate) ? "active" : ""}
                />
              ))}
            </div>
          </div>

          <div className="distance">
            <FaWalking />
            <span>{location.odo} km</span>
          </div>
        </div>
      </div>
    );
  };

  // Hàm tính khoảng cách giữa 2 điểm (theo km)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Bán kính Trái đất (km)
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Tính khoảng cách và sắp xếp địa điểm
  useEffect(() => {
    if (userLocation) {
      const locationsWithDistance = restroomLocations.map((location) => {
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          location.position[0],
          location.position[1]
        );
        return {
          ...location,
          distance,
          odo: distance.toFixed(1),
        };
      });

      const sorted = locationsWithDistance.sort(
        (a, b) => a.distance - b.distance
      );
      setNearbyRestrooms(sorted);
    } else {
      setNearbyRestrooms(restroomLocations);
    }
  }, [userLocation]);

  // Tối ưu map controller
  const MapController = () => {
    const map = useMap();

    useEffect(() => {
      if (!mapLoaded) {
        setMapInstance(map);
        setMapLoaded(true);
      }
    }, [map]);

    useEffect(() => {
      if (selectedLocation && mapInstance) {
        mapInstance.flyTo(selectedLocation.position, 16, {
          duration: 0.8, // Giảm thời gian animation
          easeLinearity: 0.5,
        });
      }
    }, [selectedLocation]);

    return null;
  };

  // Tối ưu render danh sách địa điểm
  const renderLocationList = () => {
    const locations =
      nearbyRestrooms.length > 0 ? nearbyRestrooms : restroomLocations;

    return (
      <div className="locations-list">
        {locations.map((location, index) => (
          <div
            key={index}
            className={`location-item ${
              selectedLocation === location ? "selected" : ""
            }`}
            onClick={() => handleLocationClick(location)}
          >
            <div className="location-header">
              <h3>{location.name}</h3>
              <span className={`status-badge ${location.status.toLowerCase()}`}>
                {location.status}
              </span>
            </div>

            <div className="location-info">
              <div className="location-address">
                <i className="fas fa-map-marker-alt"></i>
                <span>{location.location}</span>
              </div>

              <div className="location-metrics">
                <div className="distance">
                  <FaWalking />
                  <span>{location.odo} km</span>
                </div>
                <div className="rating">
                  <span>{location.rate}</span>
                  <FaStar className="star-icon" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Hàm xử lý khi click nút chỉ đường
  const handleShowDirections = (location) => {
    if (!userLocation) {
      alert("Vui lòng cho phép truy cập vị trí của bạn để xem chỉ đường");
      return;
    }
    setSelectedLocation(location);
    setShowRoute(true);
  };

  // Tối ưu tile layer với useMemo
  const tileLayer = useMemo(
    () => (
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        maxZoom={18}
        minZoom={13}
        keepBuffer={10}
        updateWhenZooming={false}
        updateWhenIdle={true}
      />
    ),
    []
  );

  // Tối ưu markers với useMemo
  const markers = useMemo(
    () =>
      uniqueLocations.map((location, index) => (
        <Marker
          key={`restroom-${index}`}
          position={location.position}
          icon={restroomIcon}
          eventHandlers={{
            click: () => handleLocationClick(location),
          }}
        >
          <Popup>
            <div className="popup-content">
              <h3>{location.name}</h3>
              <p>Trạng thái: {location.status}</p>
              <p>Khoảng cách: {location.odo} km</p>
              <p>Đánh giá: {location.rate} ⭐</p>
              <div className="popup-buttons">
                <button
                  className="direction-btn"
                  onClick={() => handleShowDirections(location)}
                >
                  <i className="fas fa-directions"></i>
                  Chỉ đường
                </button>
                <button
                  className="info-btn"
                  onClick={() => setSelectedLocation(location)}
                >
                  <i className="fas fa-info-circle"></i>
                  Chi tiết
                </button>
              </div>
            </div>
          </Popup>
        </Marker>
      )),
    [uniqueLocations]
  );

  return (
    <div className="page-container">
      <div className="GoogleMap" data-aos="fade-right">
        <div className="Container" data-aos="fade-right">
          <ul>
            <li
              onClick={() => setActiveMenu("Mở Rộng")}
              className={activeMenu === "Mở Rộng" ? "active" : ""}
            >
              <IoMenu data-aos="fade-right" />
              <h3 data-aos="fade-right">Mở Rộng</h3>
            </li>
            <li
              onClick={() => setActiveMenu("Gần Đây")}
              className={activeMenu === "Gần Đây" ? "active" : ""}
            >
              <MdWc data-aos="fade-right" />
              <h3 ata-aos="fade-right">Gần Đây</h3>
            </li>
            <li
              onClick={() => setActiveMenu("Đánh Giá")}
              className={activeMenu === "Đánh Giá" ? "active" : ""}
            >
              <FaStar data-aos="fade-right" />
              <h3 ata-aos="fade-right">Đánh Giá</h3>
            </li>
            <li
              onClick={() => setActiveMenu("Diễn Đàn")}
              className={activeMenu === "Diễn Đàn" ? "active" : ""}
            >
              <BiSolidCommentAdd data-aos="fade-right" />
              <h3 ata-aos="fade-right">Diễn Đàn</h3>
            </li>
            <li
              onClick={() => setActiveMenu("Lịch Sử")}
              className={activeMenu === "Lịch Sử" ? "active" : ""}
            >
              <FaHistory data-aos="fade-right" />
              <h3 ata-aos="fade-right">Lịch Sử</h3>
            </li>
            <Link to="/">
              <li>
                <RxExit data-aos="fade-right" />
                <h3 ata-aos="fade-right">Thoát</h3>
              </li>
            </Link>
          </ul>
        </div>

        <div className="Contain">
          {activeMenu === "Mở Rộng" && renderLocationList()}
          {activeMenu === "Gần Đây" && (
            <div className="nearby-list">{renderLocationList()}</div>
          )}
        </div>
      </div>

      {selectedLocation && (
        <div className="location-details-panel">
          <div className="details-header">
            <h2>{selectedLocation.name}</h2>
            <div className="header-buttons">
              <button
                className="direction-btn"
                onClick={() => handleShowDirections(selectedLocation)}
              >
                <i className="fas fa-directions"></i>
                Chỉ đường
              </button>
              <button
                className="close-btn"
                onClick={() => {
                  setSelectedLocation(null);
                  setShowRoute(false);
                }}
              >
                ×
              </button>
            </div>
          </div>

          <div className="details-content">
            <div className="status-section">
              <span
                className={`status-badge ${selectedLocation.status.toLowerCase()}`}
              >
                {selectedLocation.status === "Free" ? "Miễn phí" : "Có phí"}
              </span>
              <div className="rating">
                <span>{selectedLocation.rate}</span>
                <FaStar className="star-icon" />
              </div>
            </div>

            <div className="info-section">
              <div className="info-item">
                <i className="far fa-clock"></i>
                <span>Giờ mở cửa: {selectedLocation.details.openTime}</span>
              </div>

              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Địa chỉ: {selectedLocation.location}</span>
              </div>

              <div className="info-item">
                <FaWalking />
                <span>Khoảng cách: {selectedLocation.odo} km</span>
              </div>

              <div className="info-item">
                <i className="fas fa-restroom"></i>
                <span>Loại: {selectedLocation.details.gender}</span>
              </div>
            </div>

            <div className="facilities-section">
              <h3>Tiện ích</h3>
              <div className="facilities-grid">
                {selectedLocation.details.facilities.map((facility, index) => (
                  <div key={index} className="facility-item">
                    <i className="fas fa-check"></i>
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cleanliness-section">
              <h3>Thông tin vệ sinh</h3>
              <div className="info-item">
                <i className="fas fa-broom"></i>
                <span>
                  Vệ sinh lần cuối: {selectedLocation.details.lastCleaned}
                </span>
              </div>
              <div className="info-item">
                <i className="fas fa-shield-alt"></i>
                <span>An ninh: {selectedLocation.details.security}</span>
              </div>
            </div>

            <div className="navigation-section">
              <button
                className="direction-btn"
                onClick={() => setShowRoute(true)}
              >
                <i className="fas fa-directions"></i>
                Chỉ đường
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="map-section">
        <MapContainer
          center={thuDucPosition}
          zoom={15}
          style={{ height: "100vh", width: "100%" }}
          zoomControl={false} // Tắt zoom control mặc định
          attributionControl={false} // Tắt attribution control
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <MapController />
          <ZoomControl position="bottomright" />{" "}
          {/* Thêm zoom control ở vị trí mới */}
          {/* Chỉ render markers trong viewport */}
          {markers}
          {/* Chỉ render routing khi cần thiết */}
          {showRoute && userLocation && selectedLocation && (
            <RoutingMachine
              userLocation={userLocation}
              destination={selectedLocation.position}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default GoogleMap;
