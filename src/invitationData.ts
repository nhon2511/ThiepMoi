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
    'Mình muốn mời cậu một buổi đi chơi riêng,\nđể cùng nhau uống cà phê hay ăn một chút gì đó và nói chuyện nhiều hơn ngoài màn hình. Không cần chuẩn bị gì đặc biệt,chỉ cần cậu đồng ý đi cùng mình là được.\n\nCậu đi với mình nhé?',
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
  title: 'Mình biết mà! ❤️',
  message: 'Mình biết cậu sẽ đồng ý.\nVậy 2 ta có một buổi hẹn nhé ❤️',
};

/** Phong cách thiệp — đổi giá trị để chuyển giao diện. */
export const invitationTheme: ThemeStyle = 'romantic-rose';
