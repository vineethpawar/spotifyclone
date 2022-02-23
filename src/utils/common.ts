

export const sliderListItemConfig = (type:string) =>{
    let width=130,borderRadius=20,hasTitle=true,multiLineTitle=false,hasDesc=true,textAlign='left';

    switch(type){
        case 'album': break;
        case 'artist' : {
            borderRadius=100;
            hasDesc=false;
            textAlign='center'
            break;
        }
        case 'recent': {
            width = 100;
            borderRadius = 0;
            hasDesc=false;
            multiLineTitle=true;
            break;
        }
    }
    return {width,borderRadius,hasTitle,multiLineTitle,hasDesc,textAlign};
}