import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a9d0f5",
        paddingTop: 20
    },
    description: {
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
        color: "#2e64fe"
    },
    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#2e64fe",
        marginLeft: "auto",
        marginRight: "auto"
    },
    procurar: {
        position: "absolute",
        width: "90%",
        height: 60,
        bottom: 30,
        left: 20,
        backgroundColor: "#2e64fe",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"

    },
    procurarButton: {
        color: "#ffffff",
        fontSize: 12,
        fontWeight: "bold"
    }
});

export default styles