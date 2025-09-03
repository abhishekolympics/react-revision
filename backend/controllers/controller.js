import counter from '../models/counter.js'

const getCounter(() => {
    const counterA = counter.findAll();
    return res.status(200).( data: counterA ); 
})