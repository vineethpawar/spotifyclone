export const sliderListItemConfig = (type:string) =>{
    let width:number|string=130,borderRadius=20,hasTitle=true,multiLineTitle=false,hasDesc=true,textAlign='left',marginRight=4,singleLineDesc=false;

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
        case 'libraryGrid': {
            marginRight=0;
            singleLineDesc=true;
            break;
        }
 
    }
    return {width,borderRadius,hasTitle,multiLineTitle,hasDesc,textAlign,marginRight,singleLineDesc};
}