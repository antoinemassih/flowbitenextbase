export default function AvatarStack() {
  return (
    <div className="flex gap-24">
      <div className="flex -space-x-4 rtl:space-x-reverse">
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/profile-picture-5.jpg" alt="" />
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/profile-picture-5.jpg" alt="" />
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/profile-picture-5.jpg" alt="" />
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/profile-picture-5.jpg" alt="" />
      </div>
      <div className="flex -space-x-4 rtl:space-x-reverse">
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/profile-picture-5.jpg" alt="" />
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/profile-picture-5.jpg" alt="" />
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/profile-picture-5.jpg" alt="" />
        <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
      </div>
    </div>
  );
}