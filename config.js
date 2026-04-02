// ╔══════════════════════════════════════════════╗
// ║  BĐS ELITE – FILE CẤU HÌNH                  ║
// ║  Chỉnh sửa file này để tùy chỉnh website    ║
// ╚══════════════════════════════════════════════╝

window.SITE_CONFIG = {

  // ── THÔNG TIN CƠ BẢN ──────────────────────────
  siteName: "Elite Property",
  siteTagline: "Elevating your life with professional, reliable & personalized rental services.",

  // ── MẬT KHẨU ADMIN ────────────────────────────
  // Đổi mật khẩu tại đây, KHÔNG chia sẻ file này
  adminPassword: "Elite@2025",

  // ── THÔNG TIN LIÊN HỆ ─────────────────────────
  contacts: [
    { type: "zalo",     label: "Zalo",      icon: "Z",  bg: "#0068ff", color: "#fff", url: "https://zalo.me/0797990789" },
    { type: "whatsapp", label: "WhatsApp",  icon: "W",  bg: "#25d366", color: "#fff", url: "https://wa.me/84797990789" },
    { type: "viber",    label: "Viber",     icon: "Vi", bg: "#7360f2", color: "#fff", url: "viber://chat?number=+84797990789" },
    { type: "line",     label: "LINE",      icon: "L",  bg: "#00c300", color: "#fff", url: "https://line.me/ti/p/YOUR_ID" },
    { type: "kakao",    label: "KakaoTalk", icon: "K",  bg: "#fee500", color: "#000", url: "https://open.kakao.com/o/YOUR_ID" },
    { type: "facebook", label: "Facebook",  icon: "fb", bg: "#1877f2", color: "#fff", url: "https://fb.com/EliteProperty789" },
  ],

  // ── TẦM GIÁ CHO THUÊ (preset filter) ──────────
  priceRanges: [
    { label: "Dưới 5 triệu",    min: 0,    max: 5 },
    { label: "5 – 10 triệu",    min: 5,    max: 10 },
    { label: "10 – 20 triệu",   min: 10,   max: 20 },
    { label: "20 – 40 triệu",   min: 20,   max: 40 },
    { label: "40 – 80 triệu",   min: 40,   max: 80 },
    { label: "Trên 80 triệu",   min: 80,   max: 99999 },
    { label: "Dưới 1 tỷ",       min: 0,    max: 1000,   isBuy: true },
    { label: "1 – 3 tỷ",        min: 1000, max: 3000,   isBuy: true },
    { label: "3 – 7 tỷ",        min: 3000, max: 7000,   isBuy: true },
    { label: "7 – 15 tỷ",       min: 7000, max: 15000,  isBuy: true },
    { label: "Trên 15 tỷ",      min: 15000,max: 999999, isBuy: true },
  ],

  // ── BADGE NHÃN PRESET ─────────────────────────
  badgePresets: ["HOT", "MỚI", "BÁN GẤP", "THUÊ GẤP", "ĐỘC QUYỀN", "GIÁ TỐT", "SẮP MỞ BÁN"],

  // ── TAG PRESET ────────────────────────────────
  tagPresets: [
    "Căn hộ", "Nhà phố", "Biệt thự", "Penthouse", "Studio", "Shophouse",
    "Cho thuê", "Bán", "Đất nền",
    "Nội thất đầy đủ", "Nội thất cơ bản", "Không nội thất",
    "Ban công", "Hồ bơi", "Gym", "Bảo vệ 24/7", "Thang máy", "Hầm xe",
    "View sông", "View phố", "Gần trường học", "Gần bệnh viện"
  ],

  // ── KHU VỰC PRESET ────────────────────────────
  areaPresets: [
    "Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6",
    "Quận 7", "Quận 8", "Quận 9", "Quận 10", "Quận 11", "Quận 12",
    "Bình Thạnh", "Gò Vấp", "Tân Bình", "Tân Phú", "Phú Nhuận",
    "Bình Tân", "Nhà Bè", "Hóc Môn", "Củ Chi", "Cần Giờ",
    "Thủ Đức", "Bình Dương", "Đồng Nai", "Long An"
  ],

  // ── SỐ THẺ MỖI TRANG ─────────────────────────
  perPage: 12,

  // ── GỢI Ý TÌM KIẾM ───────────────────────────
  searchSuggestions: [
    "Căn hộ Bình Thạnh", "Nhà phố Quận 7", "Biệt thự Bình Dương",
    "Studio cho thuê", "Penthouse view sông", "Shophouse tầng trệt"
  ]
};
