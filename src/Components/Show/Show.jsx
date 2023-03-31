
import Title from '../Title/Title';
import './Show.css'

const Show = (props) => {
    console.log(props.title);
    const a=props.title
    return (
        <div>
              <div className="show_data">
                <div className="spent-time">
                <h4>Spent time on read:{props.times}</h4>
                </div>
                <div className="book-marked">
                    <h3>Bookmarked Blogs:{props.name.length} </h3>
                    {
                        a.map(title=><Title title={title.description}></Title>)
                    }
                </div>
                </div> 
                
        </div>
    );
};

export default Show;