import { createBrowserRouter } from 'react-router-dom';
import ObjIdentApp from './Object_Identification/ObjIdentApp';
import PoseEstApp from './Pose_Estimation/PoseEstApp';
import App from './FacialLandmark/App';
import AppLayout from './AppLayout';

const myRoute = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
        {
            path:'/',
            element:<ObjIdentApp/>
        },
      {
        path: 'poseEst',
        element: <PoseEstApp />
      },
      {
        path: 'facialLandmark',
        element: <App />
      }
    ]
  }
]);

export default myRoute;
