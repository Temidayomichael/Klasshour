// // import CryptoJS from 'crypto-js'
import hmacSHA1 from 'crypto-js/hmac-sha1'
import Base64 from 'crypto-js/enc-base64'


export const GenerateTimeStamp=()=> { return Math.floor(new Date().getTime()/1000); }

// getting signature for api
  export const GenerateSignature = (methodName, signatureParameters, secretAcessKey )=> {
    var signatureBase = '';
    secretAcessKey = encodeURIComponent(secretAcessKey);
    for (var key in signatureParameters ) { 
      if(signatureBase.length > 0) {
        signatureBase += '&';
      }
      signatureBase += key + '=' + signatureParameters[key];
    }
    console.log('signatureBase: ' + signatureBase);
    console.log('secretAcessKey ' + secretAcessKey);
    return hmacsha1(secretAcessKey, signatureBase);
    }

// encrpt the signature
 const hmacsha1=(secretAcessKey, signatureBase)=> {
    var encrypted = hmacSHA1(signatureBase, secretAcessKey);
    return Base64.stringify(encrypted);  
  }

// // var secretAcessKey = 'LeMjN2MCK/VZNr1ROle2bA=='

// // export const GenerateTimeStamp = () => {
// // 	return Math.floor(new Date().getTime() / 1000)
// // }
// // // getting signature for api
// // export const GenerateSignature = (methodName, signatureParameters) => {
// // 	var signatureBase = ''

// // 	secretAcessKey = encodeURIComponent('LeMjN2MCK/VZNr1ROle2bA==')
// // 	for (var key in signatureParameters) {
// // 		if (signatureBase.length > 0) {
// // 			signatureBase += '&'
// // 		}
// // 		signatureBase += key + '=' + signatureParameters[key]
// // 	}
// // 	console.log('signatureBase: ' + signatureBase)
// // 	console.log('secretAcessKey ' + secretAcessKey)

// // 	return hmacsha1(secretAcessKey, signatureBase)
// // }

// // // encrpt the signature
// // export const hmacsha1 = (secretAcessKey, signatureBase) => {
// // 	var encrypted = CryptoJS.HmacSHA1(signatureBase, secretAcessKey)
// // 	return CryptoJS.enc.Base64.stringify(encrypted)
// // }
