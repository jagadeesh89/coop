import React from 'react';
import ObjectsMap from '../../Utilities/Objects';


export default function RallyObject(props){
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <h3>
                    <span className="label label-info">{ObjectsMap[props.item._type.toLowerCase()]}</span> {props.item.FormattedID}
                </h3>
                <div>
                    {props.item.Name}
                </div>
            </div>
        </div>
    );
}