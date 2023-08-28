import { NavigationProp } from "@react-navigation/native";

interface CardProps {
    date_created: Date;
    open_date: Date;
    title: string;
    image: string;
    navigation: NavigationProp<any,any>;
  }
  
  export default CardProps;
  