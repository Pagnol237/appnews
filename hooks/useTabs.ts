import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import TabBarBackground from '@/components/ui/TabBarBackground';

type ReactNode = React.ReactNode;

interface tabInterface {
    name: string,
    title: string,
    activeIcon: ReactNode,
    inActiveIcon: React.ElementType,
 
}

/*const [selectedTab, setSelectedTab] = useState<tabInterface []>([
    {
      name: "selectedTab",
      icon: <Entypo name="home" size={28} color="red" />,
      title: "home",
    },
  ]);*/