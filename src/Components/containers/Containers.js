import './Containers.css';
import Posts from './Posts.js';
import Button from './Button.js';

const Containers = () => {
    return (
        <div className="container">
            <div className="pos">
                <Posts />
                <Posts />
                
                
            </div>
            <div className="butt">
                <Button />
                <Button />
                <Button />
                

            </div>
            
        </div>
    )
}
export default Containers;