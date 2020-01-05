
declare module "react-native-google-places-autocomplete" {
    import { Component } from "react";
    import { ReturnKeyTypeOptions, ViewStyle, TextStyle } from "react-native";

    export class GooglePlacesAutocomplete extends Component<{
        placeholder?: string,
        minLength: number,
        autoFocus: boolean,
        returnKeyType: ReturnKeyTypeOptions,
        fetchDetails: boolean,
        debounce?: number,
        query: object,
        styles: {
            container?: ViewStyle,
            description?: TextStyle,
            textInputContainer?: ViewStyle,
            textInput?: TextStyle,
            loader?: ViewStyle,
            listView?: ViewStyle,
            predefinedPlacesDescription?: TextStyle,
    
        }
        currentLocation: boolean,
        renderLeftButton: () => JSX.Element,
    } & any, any> { }
}

