// import { videoToken } from "../../../tokens"
// const config = require('../../../config');
  
// export default (req, res) => {
//   const sendTokenResponse = (token, res) => {
    
//     res.send(
//       JSON.stringify({
//         token: token.toJwt()
//       })
//     );
//   };
  
//   switch (req.method) {
//     // case 'GET':
//     //    identity = req.query.identity;
//     //    room = req.query.room;
//     //  token = videoToken(identity, room, config);
//     //   sendTokenResponse(token, res);

//     //   break
//     case 'POST':
//      const identity = req.body.identity;
//      const room = req.body.room;
//       const token = videoToken(identity, room, config);
//       sendTokenResponse(token, res)
//       console.log(identity)
//       break
//     default:
//       res.status(405).end() //Method Not Allowed
//       break
//   }
// }