import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merged cn function (no duplicates)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Existing utility functions

export const parseStringify = <T>(value: T): T => {
  return JSON.parse(JSON.stringify(value));
};

export const getAccessType = (userType: UserType) => {
  switch (userType) {
    case 'creator':
      return ['room:write'];
    case 'editor':
      return ['room:write'];
    case 'viewer':
      return ['room:read', 'room:presence:write'];
    default:
      return ['room:read', 'room:presence:write'];
  }
};

export const dateConverter = (timestamp: string | Date): string => {
  const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
  if (isNaN(date.getTime())) {
    return "Invalid date"; // Handle invalid dates
  }

  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInWeek = 7 * secondsInDay;

  if (diffInSeconds < secondsInMinute) {
    return "Just now";
  } else if (diffInSeconds < secondsInHour) {
    return `${Math.floor(diffInSeconds / secondsInMinute)} minutes ago`;
  } else if (diffInSeconds < secondsInDay) {
    return `${Math.floor(diffInSeconds / secondsInHour)} hours ago`;
  } else if (diffInSeconds < secondsInWeek) {
    return `${Math.floor(diffInSeconds / secondsInDay)} days ago`;
  } else {
    return `${Math.floor(diffInSeconds / secondsInWeek)} weeks ago`;
  }
};

// Function to generate a random color in hex format, excluding specified colors
export function getRandomColor() {
  const avoidColors = ['#000000', '#FFFFFF', '#8B4513']; // Black, White, Brown in hex format

  let randomColor;
  do {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256); // Random number between 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert RGB to hex format
    randomColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  } while (avoidColors.includes(randomColor));

  return randomColor;
}

export const brightColors = [
  '#2E8B57', '#FF6EB4', '#00CDCD', '#FF00FF', '#FF007F', '#FFD700', '#00CED1', '#FF1493',
  '#00CED1', '#FF7F50', '#9ACD32', '#FFA500', '#32CD32', '#ADFF2F', '#DB7093', '#00FF7F',
  '#FFD700', '#FF007F', '#FF6347',
];

export function getUserColor(userId: string) {
  let sum = 0;
  for (let i = 0; i < userId.length; i++) {
    sum += userId.charCodeAt(i);
  }

  const colorIndex = sum % brightColors.length;
  return brightColors[colorIndex];
}
