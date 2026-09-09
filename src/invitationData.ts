import { type CardData, type ThemeStyle, type AcceptanceConfig } from './types';

/**
 * Dữ liệu thiệp mời — chỉnh sửa ở đây để thay đổi nội dung thiệp.
 * Khi người nhận mở trang, họ sẽ thấy nội dung này.
 */
export const invitationData: CardData = {
  recipientName: 'Mỹ Khiêm',
  senderName: 'Khánh Hòa',
  title: 'Lời mời từ trái tim',
  message:
    'Anh muốn mời em một buổi đi chơi riêng,\nđể cùng nhau uống cà phê, ăn một chút gì đó và nói chuyện nhiều hơn ngoài màn hình. Không cần chuẩn bị gì đặc biệt,\nchỉ cần em đồng ý đi cùng anh là được.\n\nEm đi với anh nhé?',
  date: '19 / 09 / 2026',
  time: '19:30',
  location: 'Đà Nẵng',
};

/**
 * Cấu hình màn hình chúc mừng sau khi nhấn "Đồng ý".
 * Dễ dàng thay đổi ảnh (imageUrl) và lời nhắn xác nhận ở đây.
 */
export const acceptanceConfig: AcceptanceConfig = {
  imageUrl: '/rakko.png',
  title: 'Anh biết mà! ❤️',
  message: 'Anh biết mà, em sẽ đồng ý.\nVậy mình có một buổi hẹn nhé ❤️',
};

/** Phong cách thiệp — đổi giá trị để chuyển giao diện. */
export const invitationTheme: ThemeStyle = 'romantic-rose';
