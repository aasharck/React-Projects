
async function getMetadata(req,res){
    const metadataURI = req.query.metadataURI;
    const rest = await fetch(metadataURI, {method: "GET"});
    const response = await rest.json();
    console.log(response);
}


export default function handler(req, res) {
    const method = req.method;
  
    if (method === 'GET') {
      return getMetadata(req, res);
    }
  
    return res.status(405).json({ error: 'This method is not allowed' });
  }
  