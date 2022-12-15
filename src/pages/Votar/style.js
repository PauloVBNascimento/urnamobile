import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container2: {
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
    },
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
        width: "100%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#676262"
    },
    descriptionUrna2: {
        width: "100%",
        alignContent: "center",
        backgroundColor: "red",
        padding: 12,
        paddingHorizontal: 80,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
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