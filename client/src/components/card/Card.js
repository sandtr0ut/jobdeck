// import React from "react";
// //import Cards, { Card } from "react-swipe-card";
// import "./card.css";
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5FCFF"
//   },
//   card: {
//     flex: 1,
//     borderRadius: 4,
//     borderWidth: 2,
//     borderColor: "#E8E8E8",
//     justifyContent: "center",
//     backgroundColor: "white"
//   },
//   text: {
//     textAlign: "center",
//     fontSize: 50,
//     backgroundColor: "transparent"
//   }
// });

// class Test extends React.Component {
//   render() {
//     return (
//       <div>
//         <View style={styles.container}>
//           <Swiper
//             cards={["DO", "MORE", "OF", "WHAT", "MAKES", "YOU", "HAPPY"]}
//             renderCard={card => {
//               return (
//                 <View style={styles.card}>
//                   <Text style={styles.text}>{card}</Text>
//                 </View>
//               );
//             }}
//             onSwiped={cardIndex => {
//               console.log(cardIndex);
//             }}
//             onSwipedAll={() => {
//               console.log("onSwipedAll");
//             }}
//             cardIndex={0}
//             backgroundColor={"#4FD0E9"}
//             stackSize={3}
//           >
//             <Button
//               onPress={() => {
//                 console.log("oulala");
//               }}
//               title="Press me"
//             >
//               You can press me
//             </Button>
//           </Swiper>
//         </View>
//       </div>
//     );
//   }
// }
// export default Test;
