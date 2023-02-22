
import ImageColors from "react-native-image-colors";

export const getImageColors = async( uri: string ) => {

    const colors = await ImageColors.getColors( uri, { fallback: 'grey'});
    let primary;
    let secondary;
      
    switch (colors.platform) {
        case 'android':
            // android result properties
            primary = colors.dominant || 'grey';
            secondary = colors.average;
            break
        case 'ios':
            // iOS result properties
            primary = colors.background || 'grey';
            secondary = colors.secondary
            break
        default:
            primary = '#228B22'
    }

    return [ primary, secondary ];
  }