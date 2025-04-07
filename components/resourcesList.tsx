import { Text, View } from "react-native";
import { ItemType } from "@/lib/definitions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


const ResourceListTable = ({ item }: { item: ItemType }) => {
    return (
        <View className="flex-row gap-x-1 py-1 items-center border-b-2 border-gray-300">
            <View className="h-12 w-12 rounded-full items-center justify-center bg-[#F9F5FF]">
                <Text className="text-center font-bold text-md text-[#7F56D9]">{item.course_code}</Text>
            </View>
            <Text className="w-4/6 font-medium text-xl">{item.title}</Text>

            <View className="flex-row items-center gap-x-1">
                <FontAwesome name="edit" size={24} color="#007DFE" />
                <AntDesign name="delete" size={24} color="#007DFE" />
            </View>
        </View>
    )
}

export default ResourceListTable;