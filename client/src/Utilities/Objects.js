const array = [
    {
        type: 'portfolioitem/initiative',
        label: 'Initiative'
    },
    {
        type: 'portfolioitem/epic',
        label: 'Epic'
    },
    {
        type: 'portfolioitem/feature',
        label: 'Feature'
    },
    {
        type: 'hierarchicalrequirement',
        label: 'Story'
    },
    {
        type: 'task',
        label: 'Task'
    }
];

const ObjectsMap = {}; //build map from the array so there is one truth to change
for(let obj of array){
    ObjectsMap[obj.label] = obj.type;
    ObjectsMap[obj.type] = obj.label;
}

export {ObjectsMap as default, array as ObjectsArray};