import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import {FifthComponent} from './FirstComponent';
import LearningJavascript from './LearningJavascript';


function LearningComponent() {
    return (
      <div className="App">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
        <LearningJavascript/>
      </div>
    ) 
  }
  export default LearningComponent;
