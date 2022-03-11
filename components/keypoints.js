import Container from '@/components/container';
import { IoChatboxOutline } from 'react-icons/io5';

export default function Keypoints() {
  return (
    <Container>
      <div class='flex items-center mx-auto max-w-7xl justify-center bg-white'>
        <div class='bg-white'>
          <div class='mb-4'>
            <h1 class='font-semibold text-gray-50'>Mutual Followers</h1>
          </div>
          <div class='grid grid-cols-3 gap-4'>
            <div class='flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-96 space-y-4'>
              <img
                class='rounded-full border-gray-100 shadow-sm w-24 h-24'
                src='https://randomuser.me/api/portraits/women/43.jpg'
                alt='user image'
              />
              <h1 class='text-gray-50 font-semibold'>Versatility</h1>
              <div class='px-8 py-1 border-2 border-indigo-600 bg-indigo-600  text-gray-50 font-semibold'>
                UX design is more than just wireframes and flowcharts
              </div>
            </div>
            <div class='flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg  w-96 space-y-4'>
              <img
                class='rounded-full border-gray-100 shadow-sm w-24 h-24'
                src='https://randomuser.me/api/portraits/men/81.jpg'
                alt='user image'
              />
              <h1 class='text-gray-50 font-semibold'>Derry Harris</h1>
              <button class='px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold'>
                Follow
              </button>
            </div>
            <div class='flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg  w-96 space-y-4'>
              <img
                class='rounded-full border-gray-100 shadow-sm w-24 h-24'
                src='https://randomuser.me/api/portraits/women/2.jpg'
                alt='user image'
              />
              <h1 class='text-gray-50 font-semibold'>Aliesha Hanson</h1>
              <button class='px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold'>
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
