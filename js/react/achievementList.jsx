import React from 'react';
export default class AchievementList extends React.Component {
  render() {
    return (<div className="achievement-list">
            <form>
                <input id="filter" value=""/>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th>Slug</th>
                        <th>Name</th>
                        <th>Desciption</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.data.filter((e)=>true).map(
                    (e)=><tr>
                        <td>{e.slug}</td>
                        <td>{e.name}</td>
                        <td>{e.descrip}</td>
                        <td><button className="edit">Edit</button></td>
                        <td><button className="remove">Remove</button></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>)
  }
  
  
}