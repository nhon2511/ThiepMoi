import { type CardData, type ThemeStyle } from './types';

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

/** Phong cách thiệp — đổi giá trị để chuyển giao diện. */
export const invitationTheme: ThemeStyle = 'romantic-rose';
