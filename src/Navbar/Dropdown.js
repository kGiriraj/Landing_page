import { DocumentTextIcon, SparklesIcon, PlayIcon } from "@heroicons/react/outline";
import featureImage from '../assets/image.jpeg'; 

const Dropdown = () => {
  return (
    <div className="absolute mt-2 flex w-[650px] bg-white shadow-lg rounded-lg border border-gray-200 z-10">
      <div className="w-1/2 p-12">
        <ul className="flex flex-col space-y-8">

          <li className="flex items-start space-x-4">
            <DocumentTextIcon className="h-11 w-11 pb-4 text-purple-500" />
            <div>
              <h3 className="font-bold text-gray-600">Blog</h3>
              <p className="text-gray-600 text-sm">
                The latest industry news, updates, and info.
              </p>
            </div>
          </li>

         
          <li className="flex items-start space-x-4">
            <SparklesIcon className="h-11 w-11 pb-4 text-indigo-500" />
            <div>
              <h3 className="font-bold text-gray-800">Customer Stories</h3>
              <p className="text-gray-600 text-sm">
                Learn how our customers are making big changes.
              </p>
            </div>
          </li>

      
          <li className="flex items-start space-x-4">
            <PlayIcon className="h-11 w-11 pb-4 text-blue-500" />
            <div>
              <h3 className="font-bold text-gray-800">Video Tutorials</h3>
              <p className="text-gray-600 text-sm">
                Get up and running on new features and techniques.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-1/2 bg-gray-50 p-6 rounded-r-lg">
        {/* Image */}
        <div className="mb-4">
          <img
            src={featureImage}  // Use the imported image here
            alt="Feature Update"
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
        
        <h3 className="font-bold text-gray-800 text-lg mb-2">
          We've just released an update!
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Check out the all-new dashboard view. Pages now load faster.
        </p>
  
        <div className="flex items-center space-x-4 text-sm">
          <button className="text-gray-500">Dismiss</button>
          <a className="text-indigo-500 font-semibold ">
            Changelog
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
