import { Stack } from "expo-router";

export default function root (){
    return(
        <Stack
        screenOptions={{
            
        }}
        >
            <Stack.Screen name="index" options={{
                title:"home",
                headerShown:false,
            }}/>
        </Stack>
    )
}