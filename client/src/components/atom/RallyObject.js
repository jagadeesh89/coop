import React from 'react';
import ObjectsMap from '../../Utilities/Objects';


export default function RallyObject(props){
    const rallyObject = ObjectsMap[props.item._type.toLowerCase()];

    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <h3>
                    <span className={'label label-' + rallyObject.color}>{rallyObject.label}</span> {props.item.FormattedID}
                </h3>
                <p>
                    {props.item.Name}
                </p>
            </div>
        </div>
    );
}