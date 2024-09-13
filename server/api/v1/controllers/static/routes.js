import Express from "express";
import controller from "./controller";
import auth from "../../../../helper/auth";
import upload from "../../../../helper/uploadHandler";



export default Express.Router()
    .use(upload.uploadFile)
    .post('/addStaticContent', controller.addStaticContent)
    .get('/viewStaticContent', controller.viewStaticContent)
    .put('/editStaticContent', controller.editStaticContent)
    .get('/staticContentList', controller.staticContentList)

    //get apis
    .get('/staticLink/:_id', controller.viewStaticlinkContent)
    .get('/staticLinkContentList', controller.staticLinkContentList)
    
    
    
    .use(auth.verifyToken)
    .put('/editStaticlinkContent', controller.editStaticlinkContent)
    .post('/addFAQ', controller.addFAQ)
    .get('/viewFAQ', controller.viewFAQ)
    .get('/faqList', controller.faqList)
    .put('/editFAQ', controller.editFAQ)
    .delete('/deleteFAQ', controller.deleteFAQ)
    .delete('/deleteStaticContent', controller.deleteStaticContent)
    




