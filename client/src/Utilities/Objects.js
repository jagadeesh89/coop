const array = [
    {
        type: 'portfolioitem/initiative',
        label: 'Initiative',
        childType: 'portfolioitem/epic',
        color: 'default'
    },
    {
        type: 'portfolioitem/epic',
        label: 'Epic',
        childType: 'portfolioitem/feature',
        color: 'primary'
    },
    {
        type: 'portfolioitem/feature',
        label: 'Feature',
        childType: 'hierarchicalrequirement',
        color: 'warning'
    },
    {
        type: 'hierarchicalrequirement',
        label: 'Story',
        color: 'info'
    },
    {
        type: 'task',
        label: 'Task',
        color: 'success'
    }
];

const ObjectsMap = {}; //build map from the array so there is one truth to change
for(let obj of array){
    ObjectsMap[obj.label] = obj;
    ObjectsMap[obj.type] = obj;
}

export {
    ObjectsMap as default, 
    array as ObjectsArray
};