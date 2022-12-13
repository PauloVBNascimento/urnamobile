import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a9d0f5",
        paddingTop: 20
    },
    urnas: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5

    },
    descriptionUrna: {
        width: "90%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#676262"
    },
    buttonVote: {
        position: "absolute",
        width: 60,
        height: 60,
        bottom: 30,
        left: 20,
        backgroundColor: "#f92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: "bold"
    },
});

export default styles