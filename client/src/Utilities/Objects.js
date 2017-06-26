const array = [
    {
        type: 'portfolioitem/initiative',
        label: 'Initiative',
        child: 'portfolioitem/epic',
        color: 'default'
    },
    {
        type: 'portfolioitem/epic',
        label: 'Epic',
        child: 'portfolioitem/feature',
        color: 'primary'
    },
    {
        type: 'portfolioitem/feature',
        label: 'Feature',
        child: 'hierarchicalrequirement',
        color: 'warning'
    },
    {
        type: 'hierarchicalrequirement',
        label: 'Story',
        child: 'task',
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