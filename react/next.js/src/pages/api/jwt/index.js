import JWTUtils from 'src/includes/jwt';
import {checkReqErrors} from 'src/includes/status';

export default function handler(req, res) {
  if (req.method === 'POST') {
    JWTUtils.geToken(req, res);
  } else {
    checkReqErrors({error: 'No End Point to this Request'}, res);
  }
}

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
