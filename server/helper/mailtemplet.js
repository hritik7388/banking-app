module.exports = {
   signUpTemplet(otp) {
      return `
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>
        </title>
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          #outlook a {
            padding: 0;
          }
    
          body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
    
          table,
          td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
    
          img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
          }
    
          p {
            display: block;
            margin: 13px 0;
          }
        </style>
        <!--[if mso]>
            <noscript>
            <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            </noscript>
            <![endif]-->
        <!--[if lte mso 11]>
            <style type="text/css">
              .mj-outlook-group-fix { width:100% !important; }
            </style>
            <![endif]-->
        <style type="text/css">
          @media only screen and (min-width:480px) {
            .mj-column-per-100 {
              width: 100% !important;
              max-width: 100%;
            }
          }
        </style>
        <style media="screen and (min-width:480px)">
          .moz-text-html .mj-column-per-100 {
            width: 100% !important;
            max-width: 100%;
          }
        </style>
        <style type="text/css">
          @media only screen and (max-width:480px) {
            table.mj-full-width-mobile {
              width: 100% !important;
            }
    
            td.mj-full-width-mobile {
              width: auto !important;
            }
          }
        </style>
        <style type="text/css">
        </style>
      </head>
    
      <body style="word-spacing:normal;background-color:#f6f6f6;">
        <div style="background-color:#f6f6f6;">
          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
            <table style="background:#ffffff;background-color:#ffffff;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="border-bottom:none;border-left:none;border-right:none;border-top:8px solid #000000;direction:ltr;font-size:0px;padding:0px;padding-bottom:60px;padding-left:60px;padding-right:60px;padding-top:0px;text-align:center;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:480px;" ><![endif]-->
                    <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                      <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="vertical-align:top;padding:0;">
                              <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td style="font-size:0px;padding:0px;padding-top:20px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;" align="center">
                                      <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                          <tr>
                                            <td style="width:60px;">
                                              <img width="60" style="border:0;border-radius:0px 0px 8px 8px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/4d9bb054-8019-4a36-a4f9-ccf87fdcbcb2-Group-1171278535.png" height="auto">
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;word-break:break-word;">
                                      <div style="height:40px;line-height:40px;"> </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;padding:0px;word-break:break-word;" align="center">
                                      <div style="font-family:sans-serif;font-size:54px;line-height:1.25;text-align:center;color:#000000;"><span style="font-size: 24px;"><strong>Your Rival One Time Passcode</strong></span></div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;padding:10px;word-break:break-word;" align="center">
                                      <div style="font-family:sans-serif;font-size:20px;line-height:1.5;text-align:center;color:#000000;">
                                        <p><span style="color: #000000;">Hi,</span></p>
                                        <p><span style="color: #000000;">Your One Time Passcode (OTP) to verify your account is ${otp}</span></p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;word-break:break-word;">
                                      <div style="height:24px;line-height:24px;"> </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#0566EB" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
          <div style="background:#0566EB;background-color:#0566EB;margin:0px auto;max-width:600px;">
            <table style="background:#0566EB;background-color:#0566EB;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:60px;padding-bottom:0px;padding-left:60px;padding-right:60px;padding-top:0px;text-align:center;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:480px;" ><![endif]-->
                    <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                      <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="vertical-align:top;padding:0;">
                              <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td style="font-size:0px;padding:0px;word-break:break-word;" align="center">
                                      <table class="mj-full-width-mobile" style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="mj-full-width-mobile" style="width:480px;">
                                              <img width="480" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/0be01cbe-b04f-4a59-94ef-4bab073d0644-2nd--1-.png" height="auto">
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
            <table style="background:#ffffff;background-color:#ffffff;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:60px;padding-bottom:40px;padding-left:40px;padding-right:40px;padding-top:40px;text-align:center;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
                    <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                      <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="vertical-align:top;padding:0;">
                              <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td style="font-size:0px;padding:0px;word-break:break-word;" align="center">
                                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                      <table style="float:none;display:inline-table;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>
                                          <tr>
                                            <td style="padding:4px;vertical-align:middle;">
                                              <table style="background:#3f729b;border-radius:3px;width:30px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:5px;font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                      <a href="https://www.instagram.com/rival.finance?igsh=NTJidnducGpkbGoz" target="_blank">
                                                        <img width="30" style="border-radius:3px;display:block;" src="https://cdn.getvero.com/dd-editor/ui-assets/icons/social/instagram.png" height="30" title="https://www.instagram.com" alt="https://www.instagram.com">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso | IE]></td><td><![endif]-->
                                      <table style="float:none;display:inline-table;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>
                                          <tr>
                                            <td style="padding:4px;vertical-align:middle;">
                                              <table style="background:#4BADE9;border-radius:3px;width:30px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:5px;font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                      <a href="https://rival.finance" target="_blank">
                                                        <img width="30" style="border-radius:3px;display:block;" src="https://cdn.getvero.com/dd-editor/ui-assets/icons/social/web.png" height="30" title="https://www.example.com" alt="https://www.example.com">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso | IE]></td></tr></table><![endif]-->
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;word-break:break-word;">
                                      <div style="height:16px;line-height:16px;"> </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;padding:0px;padding-top:20px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;" align="left">
                                      <div style="font-family:sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;">Rival Payment Services Provider Co. L.L.C., operating under the name Rival Finance, is registered in the United Arab Emirates, established by the Dubai Ministry of Economy and Trade (License No. 1308095). Specializing in card issuance and acquiring services, Rival Finance is dedicated to facilitating comprehensive card programs, both on a local and international scale, in strict adherence to regulatory standards and professional excellence.<br><br>Beirut Brokerage Corporation, serving as the designated investing broker for Rival Finance, is duly licensed in Lebanon by the Capital Markets Authority (License No. 8). Located in Verdun, Beirut, the corporation specializes in providing premium investing services, ensuring compliance with the highest regulatory standards and professional practices within the financial industry.</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </div>
      </body>
    </html>
   `
   },
   signUpTempletfullName(mobileNumber) {
      return `
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>
        </title>
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          #outlook a {
            padding: 0;
          }
      
          body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
      
          table,
          td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
      
          img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
          }
      
          p {
            display: block;
            margin: 13px 0;
          }
        </style>
        <!--[if mso]>
            <noscript>
            <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            </noscript>
            <![endif]-->
        <!--[if lte mso 11]>
            <style type="text/css">
              .mj-outlook-group-fix { width:100% !important; }
            </style>
            <![endif]-->
        <style type="text/css">
          @media only screen and (min-width:480px) {
            .mj-column-per-100 {
              width: 100% !important;
              max-width: 100%;
            }
          }
        </style>
        <style media="screen and (min-width:480px)">
          .moz-text-html .mj-column-per-100 {
            width: 100% !important;
            max-width: 100%;
          }
        </style>
        <style type="text/css">
          @media only screen and (max-width:480px) {
            table.mj-full-width-mobile {
              width: 100% !important;
            }
      
            td.mj-full-width-mobile {
              width: auto !important;
            }
          }
        </style>
        <style type="text/css">
        </style>
      </head>
      
      <body style="word-spacing:normal;background-color:#f6f6f6;">
        <div style="background-color:#f6f6f6;">
          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
            <table style="background:#ffffff;background-color:#ffffff;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="border-bottom:none;border-left:none;border-right:none;border-top:8px solid #000000;direction:ltr;font-size:0px;padding:0px;padding-bottom:60px;padding-left:60px;padding-right:60px;padding-top:0px;text-align:center;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:480px;" ><![endif]-->
                    <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                      <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="vertical-align:top;padding:0;">
                              <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td style="font-size:0px;padding:0px;padding-top:20px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;" align="center">
                                      <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                          <tr>
                                            <td style="width:60px;">
                                              <img width="60" style="border:0;border-radius:0px 0px 8px 8px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/4d9bb054-8019-4a36-a4f9-ccf87fdcbcb2-Group-1171278535.png" height="auto">
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;word-break:break-word;">
                                      <div style="height:40px;line-height:40px;"> </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;padding:0px;word-break:break-word;" align="center">
                                      <div style="font-family:sans-serif;font-size:54px;line-height:1.25;text-align:center;color:#000000;"><span style="font-size: 24px;"><strong>Welcome to Rival </strong></span></div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;padding:10px;word-break:break-word;" align="center">
                                      <div style="font-family:sans-serif;font-size:20px;line-height:1.5;text-align:center;color:#000000;">
                                        <p><span style="color: #000000;">Hi,</span></p>
                                        <p><span style="color: #000000;">You are cardinally invited to Rival ${mobileNumber}</span></p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;word-break:break-word;">
                                      <div style="height:24px;line-height:24px;"> </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#0566EB" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
          <div style="background:#0566EB;background-color:#0566EB;margin:0px auto;max-width:600px;">
            <table style="background:#0566EB;background-color:#0566EB;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:60px;padding-bottom:0px;padding-left:60px;padding-right:60px;padding-top:0px;text-align:center;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:480px;" ><![endif]-->
                    <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                      <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="vertical-align:top;padding:0;">
                              <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td style="font-size:0px;padding:0px;word-break:break-word;" align="center">
                                      <table class="mj-full-width-mobile" style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="mj-full-width-mobile" style="width:480px;">
                                              <img width="480" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/0be01cbe-b04f-4a59-94ef-4bab073d0644-2nd--1-.png" height="auto">
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
            <table style="background:#ffffff;background-color:#ffffff;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:60px;padding-bottom:40px;padding-left:40px;padding-right:40px;padding-top:40px;text-align:center;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
                    <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                      <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="vertical-align:top;padding:0;">
                              <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td style="font-size:0px;padding:0px;word-break:break-word;" align="center">
                                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                      <table style="float:none;display:inline-table;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>
                                          <tr>
                                            <td style="padding:4px;vertical-align:middle;">
                                              <table style="background:#3f729b;border-radius:3px;width:30px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:5px;font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                      <a href="https://www.instagram.com/rival.finance?igsh=NTJidnducGpkbGoz" target="_blank">
                                                        <img width="30" style="border-radius:3px;display:block;" src="https://cdn.getvero.com/dd-editor/ui-assets/icons/social/instagram.png" height="30" title="https://www.instagram.com" alt="https://www.instagram.com">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso | IE]></td><td><![endif]-->
                                      <table style="float:none;display:inline-table;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>
                                          <tr>
                                            <td style="padding:4px;vertical-align:middle;">
                                              <table style="background:#4BADE9;border-radius:3px;width:30px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:5px;font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                      <a href="https://rival.finance" target="_blank">
                                                        <img width="30" style="border-radius:3px;display:block;" src="https://cdn.getvero.com/dd-editor/ui-assets/icons/social/web.png" height="30" title="https://www.example.com" alt="https://www.example.com">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso | IE]></td></tr></table><![endif]-->
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;word-break:break-word;">
                                      <div style="height:16px;line-height:16px;"> </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:0px;padding:0px;padding-top:20px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;" align="left">
                                      <div style="font-family:sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;">Rival Payment Services Provider Co. L.L.C., operating under the name Rival Finance, is registered in the United Arab Emirates, established by the Dubai Ministry of Economy and Trade (License No. 1308095). Specializing in card issuance and acquiring services, Rival Finance is dedicated to facilitating comprehensive card programs, both on a local and international scale, in strict adherence to regulatory standards and professional excellence.<br><br>Beirut Brokerage Corporation, serving as the designated investing broker for Rival Finance, is duly licensed in Lebanon by the Capital Markets Authority (License No. 8). Located in Verdun, Beirut, the corporation specializes in providing premium investing services, ensuring compliance with the highest regulatory standards and professional practices within the financial industry.</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </div>
      </body>
      </html>`
   },
   otpForgetResetTemplet(otp) {
      return `
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
         <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <style type="text/css">
               table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
               @media only screen and (min-width: 670px) {
               .u-row {
               width: 650px !important;
               }
               .u-row .u-col {
               vertical-align: top;
               }
               .u-row .u-col-100 {
               width: 650px !important;
               }
               }
               @media (max-width: 670px) {
               .u-row-container {
               max-width: 100% !important;
               padding-left: 0px !important;
               padding-right: 0px !important;
               }
               .u-row .u-col {
               min-width: 320px !important;
               max-width: 100% !important;
               display: block !important;
               }
               .u-row {
               width: calc(100% - 40px) !important;
               }
               .u-col {
               width: 100% !important;
               }
               .u-col > div {
               margin: 0 auto;
               }
               }
               body {
               margin: 0;
               padding: 0;
               }
               table,
               tr,
               td {
               vertical-align: top;
               border-collapse: collapse;
               }
               p {
               margin: 0;
               }
               .ie-container table,
               .mso-container table {
               table-layout: fixed;
               }
               * {
               line-height: inherit;
               }
               a[x-apple-data-detectors='true'] {
               color: inherit !important;
               text-decoration: none !important;
               }
            </style>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
            <!--<![endif]-->
         </head>
         <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
            <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
               <tbody>
                  <tr style="vertical-align: top">
                     <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                 <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                       <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          <!--<![endif]-->
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                         <tr>
                                                            <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                               <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                            </td>
                                                         </tr>
                                                      </table>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                         <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Welcome To Rival!</strong></span></p>
                                                         <p style="font-size: 14px; line-height: 170%; text-align: center;"><span style="font-size: 16px; line-height: 27.2px; color: #000000;">OTP Request</span></p>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                 <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                       <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          <!--<![endif]-->
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div style="color: #1b262c; line-height: 140%; text-align: left; word-wrap: break-word;  width: 100%;">
                                                         </br></br>
                                                         <p>Dear Customer,</p>
                                                         <p>You recently requested a password reset for your <b>Rival</b> account. To complete this process, we have generated a One-Time Password (OTP) for you:</p>
                                                         <p><strong>${otp}</strong></p>
                                                         <p>Please enter this code within the next 3 minutes to authorize and complete your transaction.</p>
                                                         <p>If you have any questions or need assistance, please contact our support team at <a href="mailto:support@rival.finance">support@rival.finance</a> or at 71828634.</p>
                                                         <p>Thank you for banking with Rival !</p>
                                                         <p>Best, <br>The Rival Team</p>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div align="center">
                                                         <a href="${otp}" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                         </a>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                 </br>
                                 <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                       <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                         <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2023 @ Rival Finance | All Rights Reserved</span></p>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </body>
      </html>
   `
   },
   addKycTemplet(name) {
      return `
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <title></title>
         <style type="text/css">
            table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
            @media only screen and (min-width: 670px) {
            .u-row {
            width: 650px !important;
            }
            .u-row .u-col {
            vertical-align: top;
            }
            .u-row .u-col-100 {
            width: 650px !important;
            }
            }
            @media (max-width: 670px) {
            .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            }
            .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
            }
            .u-row {
            width: calc(100% - 40px) !important;
            }
            .u-col {
            width: 100% !important;
            }
            .u-col > div {
            margin: 0 auto;
            }
            }
            body {
            margin: 0;
            padding: 0;
            }
            table,
            tr,
            td {
            vertical-align: top;
            border-collapse: collapse;
            }
            p {
            margin: 0;
            }
            .ie-container table,
            .mso-container table {
            table-layout: fixed;
            }
            * {
            line-height: inherit;
            }
            a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
            }
         </style>
         <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
         <!--<![endif]-->
      </head>
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
         <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
            <tbody>
               <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                            <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                      <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Welcome To Rival!</strong></span></p>
                                                      <p style="font-size: 14px; line-height: 170%; text-align: center;"><span style="font-size: 16px; line-height: 27.2px; color: #000000;">KYC Submission Received</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #1b262c; line-height: 140%; text-align: left; word-wrap: break-word; width: 100%;">
                                                      </br></br>
                                                      <p>Dear ${name},</p>
                                                      <br>
                                                      <p>Thank you for completing your KYC verification with Rival. Our team is currently reviewing your submission, and we will notify you once the process is finalized.</p>
                                                      <br>
                                                      <p>In the meantime, we invite you to explore the world of opportunities that Rival offers:</p>
                                                      <br>
                                                      <ul>
                                                         <li>Microlending Solutions: Tailored lending options to support your financial needs in Lebanon.</li>
                                                         <li>Investment Opportunities: Engage in stocks, forex, and cryptocurrency trading with our user-friendly platform.</li>
                                                         <li>Savings Accounts: Benefit from competitive interest rates and secure savings solutions.</li>
                                                         <li>Physical and Virtual Cards: Mastercard and Visa cards now available using Apple and Google Pay.</li>
                                                      </ul>
                                                      <br>
                                                      <p>Rival is committed to providing innovative and accessible banking solutions. As we strive to become the leading digital bank in Lebanon, we value your trust and partnership.</p>
                                                      <br>
                                                      <p>Stay connected with us on social media for the latest news, insights, and exclusive offers:</p>
                                                      <ul>
                                                         <li><a href="linkedin_link">LinkedIn</a></li>
                                                         <li><a href="instagram_link">Instagram</a></li>
                                                      </ul>
                                                      <br>
                                                      <p>If you have any questions or need assistance, please contact our support team at <a href="mailto:support@rival.finance">support@rival.finance</a>.</p>
                                                      <br>
                                                      <p>Thank you for choosing Rival. We look forward to serving you with excellence.</p>
                                                      <br>
                                                      <p>Best,<br> <br>The Rival Team</p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div align="center">
                                                      <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              </br>
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2023 @ Rival Finance | All Rights Reserved</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </body>
   </html>
   `;
   },
   mailKYCApproveTemplet(body) {
      return `
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <title></title>
         <style type="text/css">
            table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
            @media only screen and (min-width: 670px) {
            .u-row {
            width: 650px !important;
            }
            .u-row .u-col {
            vertical-align: top;
            }
            .u-row .u-col-100 {
            width: 650px !important;
            }
            }
            @media (max-width: 670px) {
            .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            }
            .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
            }
            .u-row {
            width: calc(100% - 40px) !important;
            }
            .u-col {
            width: 100% !important;
            }
            .u-col > div {
            margin: 0 auto;
            }
            }
            body {
            margin: 0;
            padding: 0;
            }
            table,
            tr,
            td {
            vertical-align: top;
            border-collapse: collapse;
            }
            p {
            margin: 0;
            }
            .ie-container table,
            .mso-container table {
            table-layout: fixed;
            }
            * {
            line-height: inherit;
            }
            a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
            }
         </style>
         <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
         <!--<![endif]-->
      </head>
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
         <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
            <tbody>
               <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                            <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                      <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Welcome To Rival!</strong></span></p>
                                                      <p style="font-size: 14px; line-height: 170%; text-align: center;"><span style="font-size: 16px; line-height: 27.2px; color: #000000;">Successful KYC Verification</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #1b262c; line-height: 140%; text-align: left; word-wrap: break-word; width: 100%;">
                                                      </br></br>
                                                      <p>Congratulations! We are thrilled to welcome you to Rival, Lebanon's emerging digital banking experience. Your KYC verification has been successfully completed, and your account is now active.</p>
                                                      <br>
                                                      <p>At Rival, we believe in more than just banking; we believe in empowering individuals to take control of their financial future. Our commitment to innovation, security, and excellence is at the core of everything we do, and we're excited to have you join our community.</p>
                                                      <br>
                                                      <p>Should you have any questions or need assistance, our dedicated support team is available 24/7 to assist you. Feel free to reach out to us at <a href="mailto:support@rival.finance">support@rival.finance</a> or call us at 71828634.</p>
                                                      <br>
                                                      <p>Once again, welcome to Rival! Money stuff, Made simple.</p>
                                                      <br>
                                                      <p>Best,<br> <br>The Rival Team</p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div align="center">
                                                      <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              </br>
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2023 @ Rival Finance | All Rights Reserved</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </body>
   </html>
   `;
   },

   sendConfirmationMailTemplet() {
      return `
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
         <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <style type="text/css">
               table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
               @media only screen and (min-width: 670px) {
               .u-row {
               width: 650px !important;
               }
               .u-row .u-col {
               vertical-align: top;
               }
               .u-row .u-col-100 {
               width: 650px !important;
               }
               }
               @media (max-width: 670px) {
               .u-row-container {
               max-width: 100% !important;
               padding-left: 0px !important;
               padding-right: 0px !important;
               }
               .u-row .u-col {
               min-width: 320px !important;
               max-width: 100% !important;
               display: block !important;
               }
               .u-row {
               width: calc(100% - 40px) !important;
               }
               .u-col {
               width: 100% !important;
               }
               .u-col > div {
               margin: 0 auto;
               }
               }
               body {
               margin: 0;
               padding: 0;
               }
               table,
               tr,
               td {
               vertical-align: top;
               border-collapse: collapse;
               }
               p {
               margin: 0;
               }
               .ie-container table,
               .mso-container table {
               table-layout: fixed;
               }
               * {
               line-height: inherit;
               }
               a[x-apple-data-detectors='true'] {
               color: inherit !important;
               text-decoration: none !important;
               }
            </style>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
            <!--<![endif]-->
         </head>
         <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
            <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
               <tbody>
                  <tr style="vertical-align: top">
                     <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                 <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                       <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          <!--<![endif]-->
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                         <tr>
                                                            <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                               <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                            </td>
                                                         </tr>
                                                      </table>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                         <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Welcome To Rival!</strong></span></p>
                                                         <p style="font-size: 14px; line-height: 170%; text-align: center;"><span style="font-size: 16px; line-height: 27.2px; color: #000000;">Successful Reset Password</span></p>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                 <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                       <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          <!--<![endif]-->
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div style="color: #1b262c; line-height: 140%; text-align: left; word-wrap: break-word; width: 100%;">
                                                         </br></br>
                                                         <p>Congratulations! We are thrilled to welcome you to Rival, Lebanon's emerging digital banking experience. Your password has been reset successfully.</p>
                                                         <br>
                                                         <p>At Rival, we believe in more than just banking; we believe in empowering individuals to take control of their financial future. Our commitment to innovation, security, and excellence is at the core of everything we do, and we're excited to have you join our community.</p>
                                                         <br>
                                                         <p>Should you have any questions or need assistance, our dedicated support team is available 24/7 to assist you. Feel free to reach out to us at <a href="mailto:support@rival.finance">support@rival.finance</a> or call us at 71828634.</p>
                                                         <br>
                                                         <p>Once again, welcome to Rival! Money stuff, Made simple.</p>
                                                         <br>
                                                         <p>Best,<br> <br>The Rival Team</p>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div align="center">
                                                         <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                         </a>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                 </br>
                                 <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                       <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                         <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2023 @ Rival Finance | All Rights Reserved</span></p>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </body>
      </html>
   `;
   },


   sendPassConfirmationMailTemplet() {
      return `
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
         <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <style type="text/css">
               table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
               @media only screen and (min-width: 670px) {
               .u-row {
               width: 650px !important;
               }
               .u-row .u-col {
               vertical-align: top;
               }
               .u-row .u-col-100 {
               width: 650px !important;
               }
               }
               @media (max-width: 670px) {
               .u-row-container {
               max-width: 100% !important;
               padding-left: 0px !important;
               padding-right: 0px !important;
               }
               .u-row .u-col {
               min-width: 320px !important;
               max-width: 100% !important;
               display: block !important;
               }
               .u-row {
               width: calc(100% - 40px) !important;
               }
               .u-col {
               width: 100% !important;
               }
               .u-col > div {
               margin: 0 auto;
               }
               }
               body {
               margin: 0;
               padding: 0;
               }
               table,
               tr,
               td {
               vertical-align: top;
               border-collapse: collapse;
               }
               p {
               margin: 0;
               }
               .ie-container table,
               .mso-container table {
               table-layout: fixed;
               }
               * {
               line-height: inherit;
               }
               a[x-apple-data-detectors='true'] {
               color: inherit !important;
               text-decoration: none !important;
               }
            </style>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
            <!--<![endif]-->
         </head>
         <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
            <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
               <tbody>
                  <tr style="vertical-align: top">
                     <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                 <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                       <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          <!--<![endif]-->
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                         <tr>
                                                            <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                               <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                            </td>
                                                         </tr>
                                                      </table>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                         <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Welcome To Rival!</strong></span></p>
                                                         <p style="font-size: 14px; line-height: 170%; text-align: center;"><span style="font-size: 16px; line-height: 27.2px; color: #000000;">Successful Reset PassCode</span></p>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                 <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                       <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          <!--<![endif]-->
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div style="color: #1b262c; line-height: 140%; text-align: left; word-wrap: break-word; width: 100%;">
                                                         </br></br>
                                                         <p>Congratulations! We are thrilled to welcome you to Rival, Lebanon's emerging digital banking experience. Your PassCode has been reset successfully.</p>
                                                         <br>
                                                         <p>At Rival, we believe in more than just banking; we believe in empowering individuals to take control of their financial future. Our commitment to innovation, security, and excellence is at the core of everything we do, and we're excited to have you join our community.</p>
                                                         <br>
                                                         <p>Should you have any questions or need assistance, our dedicated support team is available 24/7 to assist you. Feel free to reach out to us at <a href="mailto:support@rival.finance">support@rival.finance</a> or call us at 71828634.</p>
                                                         <br>
                                                         <p>Once again, welcome to Rival! Money stuff, Made simple.</p>
                                                         <br>
                                                         <p>Best,<br> <br>The Rival Team</p>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div align="center">
                                                         <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                         </a>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                 </br>
                                 <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                    <div style="width: 100% !important;">
                                       <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                             <tbody>
                                                <tr>
                                                   <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                      <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                         <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2023 @ Rival Finance | All Rights Reserved</span></p>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </body>
      </html>
   `;
   },


   mailKYCRejectTemplet(body) {
      return `
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <title></title>
         <style type="text/css">
            table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
            @media only screen and (min-width: 670px) {
            .u-row {
            width: 650px !important;
            }
            .u-row .u-col {
            vertical-align: top;
            }
            .u-row .u-col-100 {
            width: 650px !important;
            }
            }
            @media (max-width: 670px) {
            .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            }
            .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
            }
            .u-row {
            width: calc(100% - 40px) !important;
            }
            .u-col {
            width: 100% !important;
            }
            .u-col > div {
            margin: 0 auto;
            }
            }
            body {
            margin: 0;
            padding: 0;
            }
            table,
            tr,
            td {
            vertical-align: top;
            border-collapse: collapse;
            }
            p {
            margin: 0;
            }
            .ie-container table,
            .mso-container table {
            table-layout: fixed;
            }
            * {
            line-height: inherit;
            }
            a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
            }
         </style>
         <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
         <!--<![endif]-->
      </head>
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
         <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
            <tbody>
               <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                            <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                      <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Failed KYC Verification!</strong></span></p>
                                                      <p style="font-size: 14px; line-height: 170%; text-align: center;"><span style="font-size: 16px; line-height: 27.2px; color: #000000;"></span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #1b262c; line-height: 140%; text-align: left; word-wrap: break-word; width: 100%;">
                                                      </br></br>
                                                      <p>We are sorry to inform you that your KYC application form has failed. This can be due to:</p>
                                                      <ul>
                                                         <li>Inconsistent, false, or incomplete information</li>
                                                         <li>Unverifiable or expired documents</li>
                                                         <li>Compliance and regulatory issues</li>
                                                      </ul>
                                                      <br>
                                                      <p>For further information, please contact us directly at 71828634 to help you with your application form.</p>
                                                      <br>
                                                      <p>Best,<br> <br>The Rival Team</p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div align="center">
                                                      <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              </br>
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2023 @ Rival Finance | All Rights Reserved</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </body>
   </html>
   `;
   },
   mailExchangeAcceptTemplet(body) {
      return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <title></title>
         <style type="text/css">
            table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
            @media only screen and (min-width: 670px) {
            .u-row {
            width: 650px !important;
            }
            .u-row .u-col {
            vertical-align: top;
            }
            .u-row .u-col-100 {
            width: 650px !important;
            }
            }
            @media (max-width: 670px) {
            .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            }
            .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
            }
            .u-row {
            width: calc(100% - 40px) !important;
            }
            .u-col {
            width: 100% !important;
            }
            .u-col > div {
            margin: 0 auto;
            }
            }
            body {
            margin: 0;
            padding: 0;
            }
            table,
            tr,
            td {
            vertical-align: top;
            border-collapse: collapse;
            }
            p {
            margin: 0;
            }
            .ie-container table,
            .mso-container table {
            table-layout: fixed;
            }
            * {
            line-height: inherit;
            }
            a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
            }
         </style>
         <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
         <!--<![endif]-->
      </head>
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
         <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
            <tbody>
               <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                            <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                      <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Approve&nbsp;Exchange&nbsp;Status &nbsp;by&nbsp;Admin! </strong></span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #1b262c; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      </br></br>
                                                      <p style="font-size: 14px; line-height: 140%;">Hi ${body.name}</p>
                                                      <br>
                                                      <p style="font-size: 14px; line-height: 140%;">Your Exchange ExchangeId: ${body.exchangeId} is ${body.exchangeStatus} by Admin on Platform Rival Finance .</p>
                                                      </br>
                                                      <p>Thanks and Regards, <br>
                                                         <b>Team Rival Finance</b>
                                                      </p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div align="center">
                                                      <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              </br>
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2022 @ Rival Finance | All Rights Reserved</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </body>
   </html>
   `
   },
   mailExchangeRejectTemplet(body) {
      return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <title></title>
         <style type="text/css">
            table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
            @media only screen and (min-width: 670px) {
            .u-row {
            width: 650px !important;
            }
            .u-row .u-col {
            vertical-align: top;
            }
            .u-row .u-col-100 {
            width: 650px !important;
            }
            }
            @media (max-width: 670px) {
            .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            }
            .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
            }
            .u-row {
            width: calc(100% - 40px) !important;
            }
            .u-col {
            width: 100% !important;
            }
            .u-col > div {
            margin: 0 auto;
            }
            }
            body {
            margin: 0;
            padding: 0;
            }
            table,
            tr,
            td {
            vertical-align: top;
            border-collapse: collapse;
            }
            p {
            margin: 0;
            }
            .ie-container table,
            .mso-container table {
            table-layout: fixed;
            }
            * {
            line-height: inherit;
            }
            a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
            }
         </style>
         <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
         <!--<![endif]-->
      </head>
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
         <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
            <tbody>
               <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                            <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                      <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Reject&nbsp;Exchange&nbsp;Status &nbsp;by&nbsp;Admin! </strong></span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #1b262c; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      </br></br>
                                                      <p style="font-size: 14px; line-height: 140%;">Hi ${body.name}</p>
                                                      <br>
                                                      <p style="font-size: 14px; line-height: 140%;">Your Exchange exchangeId: ${body.exchangeId} is ${body.exchangeStatus} by Admin with reason :${body.reason} on Platform Rival Finance .</p>
                                                      </br>
                                                      <p>Thanks and Regards, <br>
                                                         <b>Team Rival Finance</b>
                                                      </p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div align="center">
                                                      <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              </br>
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2022 @ Rival Finance | All Rights Reserved</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </body>
   </html>
   `
   },
   mailStakeAcceptTemplet(body) {
      return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <title></title>
         <style type="text/css">
            table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
            @media only screen and (min-width: 670px) {
            .u-row {
            width: 650px !important;
            }
            .u-row .u-col {
            vertical-align: top;
            }
            .u-row .u-col-100 {
            width: 650px !important;
            }
            }
            @media (max-width: 670px) {
            .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            }
            .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
            }
            .u-row {
            width: calc(100% - 40px) !important;
            }
            .u-col {
            width: 100% !important;
            }
            .u-col > div {
            margin: 0 auto;
            }
            }
            body {
            margin: 0;
            padding: 0;
            }
            table,
            tr,
            td {
            vertical-align: top;
            border-collapse: collapse;
            }
            p {
            margin: 0;
            }
            .ie-container table,
            .mso-container table {
            table-layout: fixed;
            }
            * {
            line-height: inherit;
            }
            a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
            }
         </style>
         <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
         <!--<![endif]-->
      </head>
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
         <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
            <tbody>
               <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                            <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                      <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Approve&nbsp;Stake&nbsp;Status &nbsp;by&nbsp;Admin! </strong></span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #1b262c; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      </br></br>
                                                      <p style="font-size: 14px; line-height: 140%;">Hi ${body.name}</p>
                                                      <br>
                                                      <p style="font-size: 14px; line-height: 140%;">Your Stake StakeId: ${body.stakeId} is ${body.stakeStatus} by Admin on Platform Rival Finance .</p>
                                                      </br>
                                                      <p>Thanks and Regards, <br>
                                                         <b>Team Rival Finance</b>
                                                      </p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div align="center">
                                                      <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              </br>
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2022 @ Rival Finance | All Rights Reserved</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </body>
   </html>
   `
   },
   mailStakeRejectTemplet(body) {
      return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <title></title>
         <style type="text/css">
            table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
            @media only screen and (min-width: 670px) {
            .u-row {
            width: 650px !important;
            }
            .u-row .u-col {
            vertical-align: top;
            }
            .u-row .u-col-100 {
            width: 650px !important;
            }
            }
            @media (max-width: 670px) {
            .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            }
            .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
            }
            .u-row {
            width: calc(100% - 40px) !important;
            }
            .u-col {
            width: 100% !important;
            }
            .u-col > div {
            margin: 0 auto;
            }
            }
            body {
            margin: 0;
            padding: 0;
            }
            table,
            tr,
            td {
            vertical-align: top;
            border-collapse: collapse;
            }
            p {
            margin: 0;
            }
            .ie-container table,
            .mso-container table {
            table-layout: fixed;
            }
            * {
            line-height: inherit;
            }
            a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
            }
         </style>
         <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
         <!--<![endif]-->
      </head>
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
         <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
            <tbody>
               <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                            <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                      <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Reject&nbsp;Stake&nbsp;Status &nbsp;by&nbsp;Admin! </strong></span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #1b262c; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      </br></br>
                                                      <p style="font-size: 14px; line-height: 140%;">Hi ${body.name}</p>
                                                      <p style="font-size: 14px; line-height: 140%;">Your Stake stakeId: ${body.exchangeId} is ${body.stakeStatus} by Admin with reason :${body.reason} on Platform Rival Finance .</p>
                                                      </br>
                                                      <p>Thanks and Regards, <br>
                                                         <b>Team Rival Finance</b>
                                                      </p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div align="center">
                                                      <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              </br>
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2022 @ Rival Finance | All Rights Reserved</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </body>
   </html>
   `
   },
   mailLoginCredentialTemplet(body) {
      return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <title></title>
         <style type="text/css">
            table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
            @media only screen and (min-width: 670px) {
            .u-row {
            width: 650px !important;
            }
            .u-row .u-col {
            vertical-align: top;
            }
            .u-row .u-col-100 {
            width: 650px !important;
            }
            }
            @media (max-width: 670px) {
            .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            }
            .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
            }
            .u-row {
            width: calc(100% - 40px) !important;
            }
            .u-col {
            width: 100% !important;
            }
            .u-col > div {
            margin: 0 auto;
            }
            }
            body {
            margin: 0;
            padding: 0;
            }
            table,
            tr,
            td {
            vertical-align: top;
            border-collapse: collapse;
            }
            p {
            margin: 0;
            }
            .ie-container table,
            .mso-container table {
            table-layout: fixed;
            }
            * {
            line-height: inherit;
            }
            a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
            }
         </style>
         <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
         <!--<![endif]-->
      </head>
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
         <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
            <tbody>
               <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                            <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                      <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>SubAdmin&nbsp;Login&nbsp;Credentials &nbsp;by&nbsp;Admin! </strong></span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #1b262c; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      </br></br>
                                                      <p style="font-size: 14px; line-height: 140%;">Hi ${body.name}</p>
                                                      <p style="font-size: 14px; line-height: 140%;">
                                                      <p>Your login credentials are:</p>
                                                      <p>Email: ${body.email}</p>
                                                      <p>Password: ${body.genPass}</p>
                                                      <p>Please keep this information secure.</p>
                                                      .</p></br>
                                                      <p>Thanks and Regards, <br>
                                                         <b>Team Rival Finance</b>
                                                      </p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div align="center">
                                                      <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              </br>
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2022 @ Rival Finance | All Rights Reserved</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </body>
   </html>
   `
   },
   depositmailTemp(subject) {
      return `
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <title></title>
         <style type="text/css">
            table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
            @media only screen and (min-width: 670px) {
            .u-row {
            width: 650px !important;
            }
            .u-row .u-col {
            vertical-align: top;
            }
            .u-row .u-col-100 {
            width: 650px !important;
            }
            }
            @media (max-width: 670px) {
            .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            }
            .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
            }
            .u-row {
            width: calc(100% - 40px) !important;
            }
            .u-col {
            width: 100% !important;
            }
            .u-col > div {
            margin: 0 auto;
            }
            }
            body {
            margin: 0;
            padding: 0;
            }
            table,
            tr,
            td {
            vertical-align: top;
            border-collapse: collapse;
            }
            p {
            margin: 0;
            }
            .ie-container table,
            .mso-container table {
            table-layout: fixed;
            }
            * {
            line-height: inherit;
            }
            a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
            }
         </style>
         <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
         <!--<![endif]-->
      </head>
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
         <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
            <tbody>
               <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                            <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                      <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Deposit Confirmed !</strong></span></p>
                                                      <p style="font-size: 14px; line-height: 170%; text-align: center;"><span style="font-size: 16px; line-height: 27.2px; color: #000000;"></span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #1b262c; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                      </br></br>
                                                      <p>Your deposit ${subject} has been deposited to your Rival account.</p>
                                                      <br>
                                                      <ul>
                                                         <li><a href="linkedin_link">Check Accoun </a></li>
                                                      </ul>
                                                      <p>If there are any issues in the transactions, please contact our support team at transactions@rival.finance</p>
                                                      <br>
                                                      <p>Don’t recognize this activity? Please contact us immediately on 71828634.</p>
                                                      <br>
                                                      <p>Best,<br> <br>The Rival Team</p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div align="center">
                                                      <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              </br>
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2023 @ Rival Finance | All Rights Reserved</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </body>
   </html>
   `;
   },
   withdrawMailTemp(subject) {
      return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <title></title>
         <style type="text/css">
            table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }
            @media only screen and (min-width: 670px) {
            .u-row {
            width: 650px !important;
            }
            .u-row .u-col {
            vertical-align: top;
            }
            .u-row .u-col-100 {
            width: 650px !important;
            }
            }
            @media (max-width: 670px) {
            .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            }
            .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
            }
            .u-row {
            width: calc(100% - 40px) !important;
            }
            .u-col {
            width: 100% !important;
            }
            .u-col > div {
            margin: 0 auto;
            }
            }
            body {
            margin: 0;
            padding: 0;
            }
            table,
            tr,
            td {
            vertical-align: top;
            border-collapse: collapse;
            }
            p {
            margin: 0;
            }
            .ie-container table,
            .mso-container table {
            table-layout: fixed;
            }
            * {
            line-height: inherit;
            }
            a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
            }
         </style>
         <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
         <!--<![endif]-->
      </head>
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
         <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
            <tbody>
               <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1ff;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div stestingMailtyle="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                            <img align="center" border="0" src="https://forbackend.s3.amazonaws.com/uploads/16933237808621693323780853_AppIcon.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100px;float: none;width: 30%;max-width: 400px;" width="400"/>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #018eea; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                      <p style="line-height: 170%; text-align: center; font-size: 14px;"><span style="font-size: 24px; line-height: 40.8px; color: #000000;"><strong>Withdrawal Successful !</strong></span></p>
                                                      <p style="font-size: 14px; line-height: 170%; text-align: center;"><span style="font-size: 16px; line-height: 27.2px; color: #000000;"></span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3fbfd;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <!--<![endif]-->
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #1b262c; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                      </br></br>
                                                      <p>You have successfully withdrawal ${subject} from your Rival account.</p>
                                                      <ul>
                                                         <li><a href="linkedin_link">Check Accoun </a></li>
                                                      </ul>
                                                      <br>
                                                      <p>If there are any issues in the transactions, please contact our support team at transactions@rival.finance</p>
                                                      <br>
                                                      <p>Don’t recognize this activity? Please contact us immediately on 71828634.</p>
                                                      <br>
                                                      <p>Best,<br> <br>The Rival Team</p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div align="center">
                                                      <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #0088ee; border-radius: 60px;-webkit-border-radius: 60px; -moz-border-radius: 60px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #CCC; border-top-style: solid; border-top-width: 0px; border-left-color: #CCC; border-left-style: solid; border-left-width: 0px; border-right-color: #CCC; border-right-style: solid; border-right-width: 0px; border-bottom-color: #0275a4; border-bottom-style: solid; border-bottom-width: 5px;">
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #151418;">
                           <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              </br>
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                 <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                       <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                          <tbody>
                                             <tr>
                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
                                                   <div style="color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">2023 @ Rival Finance | All Rights Reserved</span></p>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </body>
   </html>
   `;
   },
   standardSubscriptionTemplate() {
      return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
   <head>
   <title>
   </title>
   <!--[if !mso]><!-->
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <!--<![endif]-->
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <style type="text/css">
     #outlook a {
       padding: 0;
     }

     body {
       margin: 0;
       padding: 0;
       -webkit-text-size-adjust: 100%;
       -ms-text-size-adjust: 100%;
     }

     table,
     td {
       border-collapse: collapse;
       mso-table-lspace: 0pt;
       mso-table-rspace: 0pt;
     }

     img {
       border: 0;
       height: auto;
       line-height: 100%;
       outline: none;
       text-decoration: none;
       -ms-interpolation-mode: bicubic;
     }

     p {
       display: block;
       margin: 13px 0;
     }
   </style>
   <!--[if mso]>
       <noscript>
       <xml>
       <o:OfficeDocumentSettings>
         <o:AllowPNG/>
         <o:PixelsPerInch>96</o:PixelsPerInch>
       </o:OfficeDocumentSettings>
       </xml>
       </noscript>
       <![endif]-->
   <!--[if lte mso 11]>
       <style type="text/css">
         .mj-outlook-group-fix { width:100% !important; }
       </style>
       <![endif]-->
   <!--[if !mso]><!-->
   <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:normal,italic,bold&amp;display=swap">
   <style type="text/css">
     @import url(https://fonts.googleapis.com/css?family=Cabin:normal,italic,bold&display=swap);
   </style>
   <!--<![endif]-->
   <style type="text/css">
     @media only screen and (min-width:480px) {
       .mj-column-per-100 {
         width: 100% !important;
         max-width: 100%;
       }

       .mj-column-per-50 {
         width: 50% !important;
         max-width: 50%;
       }
     }
   </style>
   <style media="screen and (min-width:480px)">
     .moz-text-html .mj-column-per-100 {
       width: 100% !important;
       max-width: 100%;
     }

     .moz-text-html .mj-column-per-50 {
       width: 50% !important;
       max-width: 50%;
     }
   </style>
   <style type="text/css">
     @media only screen and (max-width:480px) {
       table.mj-full-width-mobile {
         width: 100% !important;
       }

       td.mj-full-width-mobile {
         width: auto !important;
       }
     }
   </style>
   <style type="text/css">
   </style>
 </head>

 <body style="word-spacing:normal;">
   <div style="">
     <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0.5, 0" position="0.5, 0" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/284cab5b-71a5-45f2-9676-526cbf027333-Group-1171278459--3-.png" type="tile" size="1,1" aspect="atleast" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]-->
     <div style="background:url('https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/284cab5b-71a5-45f2-9676-526cbf027333-Group-1171278459--3-.png') center top / cover repeat;background-position:center top;background-repeat:repeat;background-size:cover;margin:0px auto;max-width:600px;">
       <div style="line-height:0;font-size:0;">
         <table style="background:url('https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/284cab5b-71a5-45f2-9676-526cbf027333-Group-1171278459--3-.png') center top / cover repeat;background-position:center top;background-repeat:repeat;background-size:cover;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" background="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/284cab5b-71a5-45f2-9676-526cbf027333-Group-1171278459--3-.png" align="center">
           <tbody>
             <tr>
               <td style="direction:ltr;font-size:0px;padding:40px;padding-bottom:100px;padding-left:40px;padding-right:40px;padding-top:48px;text-align:center;">
                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
                 <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                   <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                     <tbody>
                       <tr>
                         <td style="vertical-align:top;padding:0;">
                           <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                             <tbody>
                               <tr>
                                 <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                   <div style="font-family:sans-serif;font-size:66px;line-height:1.1;text-align:left;color:#ffffff;"><strong>Your Standard Payment Has Been Completed</strong></div>
                                 </td>
                               </tr>
                               <tr>
                                 <td style="font-size:0px;word-break:break-word;">
                                   <div style="height:16px;line-height:16px;"> </div>
                                 </td>
                               </tr>
                               <tr>
                                 <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                   <div style="font-family:sans-serif;font-size:24px;line-height:1.6;text-align:left;color:#ffffff;">Hey there, your Standard plan payment has been completed. Thank you for your continuous support in our journey for change.</div>
                                 </td>
                               </tr>
                               <tr>
                                 <td style="font-size:0px;word-break:break-word;">
                                   <div style="height:40px;line-height:40px;"> </div>
                                 </td>
                               </tr>
                               <tr>
                                 <td style="font-size:0px;word-break:break-word;">
                                   <div style="height:48px;line-height:48px;"> </div>
                                 </td>
                               </tr>
                               <tr>
                                 <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;" align="center">
                                   <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                     <tbody>
                                       <tr>
                                         <td style="width:470px;">
                                           <img width="470" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/8c006a2d-8f2d-4e72-9989-7f89166f82e2-Group-1171278817.png" height="auto">
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
                 <!--[if mso | IE]></td></tr></table><![endif]-->
               </td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
     <!--[if mso | IE]></v:textbox></v:rect></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
     <div style="margin:0px auto;max-width:600px;">
       <table style="width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
         <tbody>
           <tr>
             <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
               <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;word-break:break-word;">
                                 <div style="height:36px;line-height:36px;"> </div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td></tr></table><![endif]-->
             </td>
           </tr>
         </tbody>
       </table>
     </div>
     <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#246bfd" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
     <div style="background:#246bfd;background-color:#246bfd;margin:0px auto;border-radius:24px;max-width:600px;">
       <table style="background:#246bfd;background-color:#246bfd;width:100%;border-radius:24px;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
         <tbody>
           <tr>
             <td style="direction:ltr;font-size:0px;padding:40px;text-align:center;">
               <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                 <div style="font-family:sans-serif;font-size:40px;line-height:1.25;text-align:left;color:#ffffff;"><strong>Empower Your Money</strong></div>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;word-break:break-word;">
                                 <div style="height:16px;line-height:16px;"> </div>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;word-break:break-word;">
                                 <div style="height:32px;line-height:32px;"> </div>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                 <div style="font-family:sans-serif;font-size:18px;line-height:1;text-align:left;color:#000000;"><span style="font-size: 11px;">Rival Payment Services Provider Co. L.L.C., operating under the name Rival Finance, is registered in the United Arab Emirates, established by the Dubai Ministry of Economy and Trade (License No. 1308095). Specializing in card issuance and acquiring services, Rival Finance is dedicated to facilitating comprehensive card programs, both on a local and international scale, in strict adherence to regulatory standards and professional excellence.</span><br><br><span style="font-size: 11px;">Beirut Brokerage Corporation, serving as the designated investing broker for Rival Finance, is duly licensed in Lebanon by the Capital Markets Authority (License No. 8). Located in Verdun, Beirut, the corporation specializes in providing premium investing services, ensuring compliance with the highest regulatory standards and professional practices within the financial industry.</span></div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td></tr></table><![endif]-->
             </td>
           </tr>
         </tbody>
       </table>
     </div>
     <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
     <div style="margin:0px auto;max-width:600px;">
       <table style="width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
         <tbody>
           <tr>
             <td style="direction:ltr;font-size:0px;padding:20px;padding-bottom:72px;padding-left:30px;padding-right:30px;padding-top:72px;text-align:center;">
               <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:270px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-50 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:10px;padding-bottom:0px;padding-left:10px;word-break:break-word;" align="left">
                                 <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                   <tbody>
                                     <tr>
                                       <td style="width:48px;">
                                         <img width="48" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/bd6a0650-0842-4f80-a411-210b201de801-Group-1171278535.png" height="auto">
                                       </td>
                                     </tr>
                                   </tbody>
                                 </table>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:270px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-50 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;word-break:break-word;">
                                 <div style="height:16px;line-height:16px;"> </div>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:10px;padding-bottom:0px;padding-left:10px;word-break:break-word;" align="right">
                                 <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:14px;line-height:1.5;text-align:right;color:#5B5B5B;">2024 Rival All rights reserved<br><br>Unsubscribe</div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td></tr></table><![endif]-->
             </td>
           </tr>
         </tbody>
       </table>
     </div>
     <!--[if mso | IE]></td></tr></table><![endif]-->
   </div>
 </body>
   </html>
   `;
   },
   proSubscriptionTemplate() {
      return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
   <head>
   <title>
   </title>
   <!--[if !mso]><!-->
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <!--<![endif]-->
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <style type="text/css">
     #outlook a {
       padding: 0;
     }

     body {
       margin: 0;
       padding: 0;
       -webkit-text-size-adjust: 100%;
       -ms-text-size-adjust: 100%;
     }

     table,
     td {
       border-collapse: collapse;
       mso-table-lspace: 0pt;
       mso-table-rspace: 0pt;
     }

     img {
       border: 0;
       height: auto;
       line-height: 100%;
       outline: none;
       text-decoration: none;
       -ms-interpolation-mode: bicubic;
     }

     p {
       display: block;
       margin: 13px 0;
     }
   </style>
   <!--[if mso]>
       <noscript>
       <xml>
       <o:OfficeDocumentSettings>
         <o:AllowPNG/>
         <o:PixelsPerInch>96</o:PixelsPerInch>
       </o:OfficeDocumentSettings>
       </xml>
       </noscript>
       <![endif]-->
   <!--[if lte mso 11]>
       <style type="text/css">
         .mj-outlook-group-fix { width:100% !important; }
       </style>
       <![endif]-->
   <!--[if !mso]><!-->
   <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:normal,italic,bold&amp;display=swap">
   <style type="text/css">
     @import url(https://fonts.googleapis.com/css?family=Cabin:normal,italic,bold&display=swap);
   </style>
   <!--<![endif]-->
   <style type="text/css">
     @media only screen and (min-width:480px) {
       .mj-column-per-100 {
         width: 100% !important;
         max-width: 100%;
       }

       .mj-column-per-50 {
         width: 50% !important;
         max-width: 50%;
       }
     }
   </style>
   <style media="screen and (min-width:480px)">
     .moz-text-html .mj-column-per-100 {
       width: 100% !important;
       max-width: 100%;
     }

     .moz-text-html .mj-column-per-50 {
       width: 50% !important;
       max-width: 50%;
     }
   </style>
   <style type="text/css">
     @media only screen and (max-width:480px) {
       table.mj-full-width-mobile {
         width: 100% !important;
       }

       td.mj-full-width-mobile {
         width: auto !important;
       }
     }
   </style>
   <style type="text/css">
   </style>
 </head>

 <body style="word-spacing:normal;">
   <div style="">
     <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0.5, 0" position="0.5, 0" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/9516fb7d-724c-463d-aa0a-d134d44fd340-Group-1171278456.png" type="tile" size="1,1" aspect="atleast" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]-->
     <div style="background:url('https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/9516fb7d-724c-463d-aa0a-d134d44fd340-Group-1171278456.png') center top / cover repeat;background-position:center top;background-repeat:repeat;background-size:cover;margin:0px auto;max-width:600px;">
       <div style="line-height:0;font-size:0;">
         <table style="background:url('https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/9516fb7d-724c-463d-aa0a-d134d44fd340-Group-1171278456.png') center top / cover repeat;background-position:center top;background-repeat:repeat;background-size:cover;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" background="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/9516fb7d-724c-463d-aa0a-d134d44fd340-Group-1171278456.png" align="center">
           <tbody>
             <tr>
               <td style="direction:ltr;font-size:0px;padding:40px;padding-bottom:100px;padding-left:40px;padding-right:40px;padding-top:48px;text-align:center;">
                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
                 <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                   <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                     <tbody>
                       <tr>
                         <td style="vertical-align:top;padding:0;">
                           <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                             <tbody>
                               <tr>
                                 <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                   <div style="font-family:sans-serif;font-size:66px;line-height:1.1;text-align:left;color:#ffffff;"><strong>Your Pro Payment Has Been Completed</strong></div>
                                 </td>
                               </tr>
                               <tr>
                                 <td style="font-size:0px;word-break:break-word;">
                                   <div style="height:16px;line-height:16px;"> </div>
                                 </td>
                               </tr>
                               <tr>
                                 <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                   <div style="font-family:sans-serif;font-size:24px;line-height:1.6;text-align:left;color:#ffffff;">Hey there, your Pro plan payment has been completed. Thank you for your continuous support in our journey for change.</div>
                                 </td>
                               </tr>
                               <tr>
                                 <td style="font-size:0px;word-break:break-word;">
                                   <div style="height:40px;line-height:40px;"> </div>
                                 </td>
                               </tr>
                               <tr>
                                 <td style="font-size:0px;word-break:break-word;">
                                   <div style="height:48px;line-height:48px;"> </div>
                                 </td>
                               </tr>
                               <tr>
                                 <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;" align="center">
                                   <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                     <tbody>
                                       <tr>
                                         <td style="width:490px;">
                                           <img width="490" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/4636ae86-abb6-433d-98ba-44740472de16-Group-1171278819.png" height="auto">
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
                 <!--[if mso | IE]></td></tr></table><![endif]-->
               </td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
     <!--[if mso | IE]></v:textbox></v:rect></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
     <div style="margin:0px auto;max-width:600px;">
       <table style="width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
         <tbody>
           <tr>
             <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
               <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;word-break:break-word;">
                                 <div style="height:36px;line-height:36px;"> </div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td></tr></table><![endif]-->
             </td>
           </tr>
         </tbody>
       </table>
     </div>
     <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#246bfd" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
     <div style="background:#246bfd;background-color:#246bfd;margin:0px auto;border-radius:24px;max-width:600px;">
       <table style="background:#246bfd;background-color:#246bfd;width:100%;border-radius:24px;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
         <tbody>
           <tr>
             <td style="direction:ltr;font-size:0px;padding:40px;text-align:center;">
               <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                 <div style="font-family:sans-serif;font-size:40px;line-height:1.25;text-align:left;color:#ffffff;"><strong>Empower Your Money</strong></div>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;word-break:break-word;">
                                 <div style="height:16px;line-height:16px;"> </div>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;word-break:break-word;">
                                 <div style="height:32px;line-height:32px;"> </div>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                 <div style="font-family:sans-serif;font-size:18px;line-height:1;text-align:left;color:#000000;"><span style="font-size: 11px;">Rival Payment Services Provider Co. L.L.C., operating under the name Rival Finance, is registered in the United Arab Emirates, established by the Dubai Ministry of Economy and Trade (License No. 1308095). Specializing in card issuance and acquiring services, Rival Finance is dedicated to facilitating comprehensive card programs, both on a local and international scale, in strict adherence to regulatory standards and professional excellence.</span><br><br><span style="font-size: 11px;">Beirut Brokerage Corporation, serving as the designated investing broker for Rival Finance, is duly licensed in Lebanon by the Capital Markets Authority (License No. 8). Located in Verdun, Beirut, the corporation specializes in providing premium investing services, ensuring compliance with the highest regulatory standards and professional practices within the financial industry.</span></div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td></tr></table><![endif]-->
             </td>
           </tr>
         </tbody>
       </table>
     </div>
     <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
     <div style="margin:0px auto;max-width:600px;">
       <table style="width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
         <tbody>
           <tr>
             <td style="direction:ltr;font-size:0px;padding:20px;padding-bottom:72px;padding-left:30px;padding-right:30px;padding-top:72px;text-align:center;">
               <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:270px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-50 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:10px;padding-bottom:0px;padding-left:10px;word-break:break-word;" align="left">
                                 <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                   <tbody>
                                     <tr>
                                       <td style="width:48px;">
                                         <img width="48" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/bd6a0650-0842-4f80-a411-210b201de801-Group-1171278535.png" height="auto">
                                       </td>
                                     </tr>
                                   </tbody>
                                 </table>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:270px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-50 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;word-break:break-word;">
                                 <div style="height:16px;line-height:16px;"> </div>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:10px;padding-bottom:0px;padding-left:10px;word-break:break-word;" align="right">
                                 <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:14px;line-height:1.5;text-align:right;color:#5B5B5B;">2024 Rival All rights reserved<br><br>Unsubscribe</div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td></tr></table><![endif]-->
             </td>
           </tr>
         </tbody>
       </table>
     </div>
     <!--[if mso | IE]></td></tr></table><![endif]-->
   </div>
 </body>
   </html>
   `;
   },
   plusSubscriptionTemplate() {
      return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
   <head>
    <title>
    </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a {
        padding: 0;
      }

      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }

      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
        <noscript>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        </noscript>
        <![endif]-->
    <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
    <!--[if !mso]><!-->
    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:normal,italic,bold&amp;display=swap">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Cabin:normal,italic,bold&display=swap);
    </style>
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }

        .mj-column-per-50 {
          width: 50% !important;
          max-width: 50%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }

      .moz-text-html .mj-column-per-50 {
        width: 50% !important;
        max-width: 50%;
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width:480px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }

        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
    <style type="text/css">
    </style>
  </head>

  <body style="word-spacing:normal;">
    <div style="">
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0.5, 0" position="0.5, 0" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/284cab5b-71a5-45f2-9676-526cbf027333-Group-1171278459--3-.png" type="tile" size="1,1" aspect="atleast" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]-->
      <div style="background:url('https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/284cab5b-71a5-45f2-9676-526cbf027333-Group-1171278459--3-.png') center top / cover repeat;background-position:center top;background-repeat:repeat;background-size:cover;margin:0px auto;max-width:600px;">
        <div style="line-height:0;font-size:0;">
          <table style="background:url('https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/284cab5b-71a5-45f2-9676-526cbf027333-Group-1171278459--3-.png') center top / cover repeat;background-position:center top;background-repeat:repeat;background-size:cover;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" background="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/284cab5b-71a5-45f2-9676-526cbf027333-Group-1171278459--3-.png" align="center">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:40px;padding-bottom:100px;padding-left:40px;padding-right:40px;padding-top:48px;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
                  <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                    <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="vertical-align:top;padding:0;">
                            <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                    <div style="font-family:sans-serif;font-size:66px;line-height:1.1;text-align:left;color:#ffffff;"><strong>Your Plus Payment Has Been Completed</strong></div>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;">
                                    <div style="height:16px;line-height:16px;"> </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                    <div style="font-family:sans-serif;font-size:24px;line-height:1.6;text-align:left;color:#ffffff;">Hey there, your Plus plan payment has been completed. Thank you for your continuous support in our journey for change.</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;">
                                    <div style="height:40px;line-height:40px;"> </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;">
                                    <div style="height:48px;line-height:48px;"> </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;" align="center">
                                    <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td style="width:470px;">
                                            <img width="470" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/620f63e6-595e-4c0c-a5f4-fbfa7cd3c67d-Group-1171278818.png" height="auto">
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--[if mso | IE]></v:textbox></v:rect></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table style="width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                  <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;padding:0;">
                          <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="font-size:0px;word-break:break-word;">
                                  <div style="height:36px;line-height:36px;"> </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#246bfd" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div style="background:#246bfd;background-color:#246bfd;margin:0px auto;border-radius:24px;max-width:600px;">
        <table style="background:#246bfd;background-color:#246bfd;width:100%;border-radius:24px;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:40px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
                <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                  <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;padding:0;">
                          <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                  <div style="font-family:sans-serif;font-size:40px;line-height:1.25;text-align:left;color:#ffffff;"><strong>Empower Your Money</strong></div>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:0px;word-break:break-word;">
                                  <div style="height:16px;line-height:16px;"> </div>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:0px;word-break:break-word;">
                                  <div style="height:32px;line-height:32px;"> </div>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                  <div style="font-family:sans-serif;font-size:18px;line-height:1;text-align:left;color:#000000;"><span style="font-size: 11px;">Rival Payment Services Provider Co. L.L.C., operating under the name Rival Finance, is registered in the United Arab Emirates, established by the Dubai Ministry of Economy and Trade (License No. 1308095). Specializing in card issuance and acquiring services, Rival Finance is dedicated to facilitating comprehensive card programs, both on a local and international scale, in strict adherence to regulatory standards and professional excellence.</span><br><br><span style="font-size: 11px;">Beirut Brokerage Corporation, serving as the designated investing broker for Rival Finance, is duly licensed in Lebanon by the Capital Markets Authority (License No. 8). Located in Verdun, Beirut, the corporation specializes in providing premium investing services, ensuring compliance with the highest regulatory standards and professional practices within the financial industry.</span></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table style="width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px;padding-bottom:72px;padding-left:30px;padding-right:30px;padding-top:72px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:270px;" ><![endif]-->
                <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-50 mj-outlook-group-fix">
                  <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;padding:0;">
                          <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:10px;padding-bottom:0px;padding-left:10px;word-break:break-word;" align="left">
                                  <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                      <tr>
                                        <td style="width:48px;">
                                          <img width="48" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/bd6a0650-0842-4f80-a411-210b201de801-Group-1171278535.png" height="auto">
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:270px;" ><![endif]-->
                <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-50 mj-outlook-group-fix">
                  <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;padding:0;">
                          <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="font-size:0px;word-break:break-word;">
                                  <div style="height:16px;line-height:16px;"> </div>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:10px;padding-bottom:0px;padding-left:10px;word-break:break-word;" align="right">
                                  <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:14px;line-height:1.5;text-align:right;color:#5B5B5B;">2024 Rival All rights reserved<br><br>Unsubscribe</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->
    </div>
  </body>
   </html>
   `;
   },
   freezeUserTemplate() {
      return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
   <head>
   <title>
   </title>
   <!--[if !mso]><!-->
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <!--<![endif]-->
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <style type="text/css">
     #outlook a {
       padding: 0;
     }

     body {
       margin: 0;
       padding: 0;
       -webkit-text-size-adjust: 100%;
       -ms-text-size-adjust: 100%;
     }

     table,
     td {
       border-collapse: collapse;
       mso-table-lspace: 0pt;
       mso-table-rspace: 0pt;
     }

     img {
       border: 0;
       height: auto;
       line-height: 100%;
       outline: none;
       text-decoration: none;
       -ms-interpolation-mode: bicubic;
     }

     p {
       display: block;
       margin: 13px 0;
     }
   </style>
   <!--[if mso]>
       <noscript>
       <xml>
       <o:OfficeDocumentSettings>
         <o:AllowPNG/>
         <o:PixelsPerInch>96</o:PixelsPerInch>
       </o:OfficeDocumentSettings>
       </xml>
       </noscript>
       <![endif]-->
   <!--[if lte mso 11]>
       <style type="text/css">
         .mj-outlook-group-fix { width:100% !important; }
       </style>
       <![endif]-->
   <!--[if !mso]><!-->
   <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:normal,italic,bold&amp;display=swap">
   <style type="text/css">
     @import url(https://fonts.googleapis.com/css?family=Cabin:normal,italic,bold&display=swap);
   </style>
   <!--<![endif]-->
   <style type="text/css">
     @media only screen and (min-width:480px) {
       .mj-column-per-100 {
         width: 100% !important;
         max-width: 100%;
       }

       .mj-column-per-50 {
         width: 50% !important;
         max-width: 50%;
       }
     }
   </style>
   <style media="screen and (min-width:480px)">
     .moz-text-html .mj-column-per-100 {
       width: 100% !important;
       max-width: 100%;
     }

     .moz-text-html .mj-column-per-50 {
       width: 50% !important;
       max-width: 50%;
     }
   </style>
   <style type="text/css">
     @media only screen and (max-width:480px) {
       table.mj-full-width-mobile {
         width: 100% !important;
       }

       td.mj-full-width-mobile {
         width: auto !important;
       }
     }
   </style>
   <style type="text/css">
   </style>
 </head>

 <body style="word-spacing:normal;">
   <div style="">
     <table style="background:#ffffff;background-color:#ffffff;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
       <tbody>
         <tr>
           <td>
             <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
             <div style="margin:0px auto;max-width:600px;">
               <table style="width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                 <tbody>
                   <tr>
                     <td style="direction:ltr;font-size:0px;padding:40px;padding-bottom:100px;padding-left:40px;padding-right:40px;padding-top:48px;text-align:center;">
                       <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
                       <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                         <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="vertical-align:top;padding:0;">
                                 <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                   <tbody>
                                     <tr>
                                       <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                         <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                           <tbody>
                                             <tr>
                                               <td style="width:40px;">
                                                 <img width="40" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/edf515f3-1967-4dc5-bbe1-917ae9e095ac-Group-1171278535.png" height="auto">
                                               </td>
                                             </tr>
                                           </tbody>
                                         </table>
                                       </td>
                                     </tr>
                                     <tr>
                                       <td style="font-size:0px;padding:0px;padding-top:20px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;" align="left">
                                         <div style="font-family:sans-serif;font-size:66px;line-height:1.1;text-align:left;color:#ffffff;"><strong><span style="color: #000000;">Your Account Has Been Frozen</span></strong></div>
                                       </td>
                                     </tr>
                                     <tr>
                                       <td style="font-size:0px;word-break:break-word;">
                                         <div style="height:16px;line-height:16px;"> </div>
                                       </td>
                                     </tr>
                                     <tr>
                                       <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;word-break:break-word;" align="left">
                                         <div style="font-family:sans-serif;font-size:24px;line-height:1.6;text-align:left;color:#ffffff;"><strong><span style="color: #000000;">It looks like there is something wrong , your account has been frozen. Please contact support.</span></strong></div>
                                       </td>
                                     </tr>
                                     <tr>
                                       <td style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle" align="left">
                                         <table style="border-collapse:separate;line-height:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                           <tbody>
                                             <tr>
                                               <td valign="middle" style="border:none;border-radius:40px;cursor:auto;mso-padding-alt:10px 25px;background:#000000;" role="presentation" bgcolor="#000000" align="center">
                                                 <p style="display:inline-block;background:#000000;color:#ffffff;font-family:sans-serif;font-size:24px;font-weight:normal;line-height:1.75;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:40px;">
                                                   <strong>Contact Support&nbsp;</strong>
                                                 </p>
                                               </td>
                                             </tr>
                                           </tbody>
                                         </table>
                                       </td>
                                     </tr>
                                     <tr>
                                       <td style="font-size:0px;padding:0px;padding-top:70px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;" align="center">
                                         <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                           <tbody>
                                             <tr>
                                               <td style="width:280px;">
                                                 <img width="280" style="border:0;border-radius:0px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/94414535-cdcf-4b59-9754-8c579d58234c-freezing.png" height="auto">
                                               </td>
                                             </tr>
                                           </tbody>
                                         </table>
                                       </td>
                                     </tr>
                                   </tbody>
                                 </table>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
                       <!--[if mso | IE]></td></tr></table><![endif]-->
                     </td>
                   </tr>
                 </tbody>
               </table>
             </div>
             <!--[if mso | IE]></td></tr></table><![endif]-->
           </td>
         </tr>
       </tbody>
     </table>
     <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
     <div style="margin:0px auto;max-width:600px;">
       <table style="width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
         <tbody>
           <tr>
             <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
               <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;word-break:break-word;">
                                 <div style="height:36px;line-height:36px;"> </div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td></tr></table><![endif]-->
             </td>
           </tr>
         </tbody>
       </table>
     </div>
     <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#246bfd" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
     <div style="background:#246bfd;background-color:#246bfd;margin:0px auto;border-radius:24px;max-width:600px;">
       <table style="background:#246bfd;background-color:#246bfd;width:100%;border-radius:24px;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
         <tbody>
           <tr>
             <td style="direction:ltr;font-size:0px;padding:40px;text-align:center;">
               <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;padding:0px;word-break:break-word;" align="left">
                                 <div style="font-family:sans-serif;font-size:40px;line-height:1.25;text-align:left;color:#ffffff;"><strong>Empower Your Money</strong></div>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;word-break:break-word;">
                                 <div style="height:16px;line-height:16px;"> </div>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;padding:0px;word-break:break-word;" vertical-align="middle" align="left">
                                 <table style="border-collapse:separate;line-height:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                   <tbody>
                                     <tr>
                                       <td valign="middle" style="border:none;border-radius:40px;cursor:auto;mso-padding-alt:10px 25px;background:#000000;" role="presentation" bgcolor="#000000" align="center">
                                         <p style="display:inline-block;background:#000000;color:#ffffff;font-family:sans-serif;font-size:24px;font-weight:normal;line-height:1.75;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:40px;">
                                           <strong>Contact Support</strong>
                                         </p>
                                       </td>
                                     </tr>
                                   </tbody>
                                 </table>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;padding:0px;padding-top:30px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;" align="left">
                                 <div style="font-family:sans-serif;font-size:1px;line-height:1.0;text-align:left;color:#5b5b5b;">
                                   <p><span style="font-size: 11px; color: #000000;">Rival Payment Services Provider Co. L.L.C., operating under the name Rival Finance, is registered in the United Arab Emirates, established by the Dubai Ministry of Economy and Trade (License No. 1308095). Specializing in card issuance and acquiring services, Rival Finance is dedicated to facilitating comprehensive card programs, both on a local and international scale, in strict adherence to regulatory standards and professional excellence.</span></p>
                                   <p><span style="font-size: 11px; color: #000000;">Beirut Brokerage Corporation, serving as the designated investing broker for Rival Finance, is duly licensed in Lebanon by the Capital Markets Authority (License No. 8). Located in Verdun, Beirut, the corporation specializes in providing premium investing services, ensuring compliance with the highest regulatory standards and professional practices within the financial industry.</span></p>
                                 </div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td></tr></table><![endif]-->
             </td>
           </tr>
         </tbody>
       </table>
     </div>
     <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
     <div style="margin:0px auto;max-width:600px;">
       <table style="width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
         <tbody>
           <tr>
             <td style="direction:ltr;font-size:0px;padding:20px;padding-bottom:72px;padding-left:30px;padding-right:30px;padding-top:72px;text-align:center;">
               <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:270px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-50 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:10px;padding-bottom:0px;padding-left:10px;word-break:break-word;" align="left">
                                 <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                   <tbody>
                                     <tr>
                                       <td style="width:48px;">
                                         <img width="48" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://message-cdn.getvero.com/uploads/4ba0694ef893348906d8bed6a28f2c8c/fullsize/926a436c-3359-412c-a724-0e06e9104c48-Group-1171278535.png" height="auto">
                                       </td>
                                     </tr>
                                   </tbody>
                                 </table>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:270px;" ><![endif]-->
               <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-50 mj-outlook-group-fix">
                 <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                   <tbody>
                     <tr>
                       <td style="vertical-align:top;padding:0;">
                         <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                           <tbody>
                             <tr>
                               <td style="font-size:0px;padding:10px;padding-top:0px;padding-right:5px;padding-bottom:0px;padding-left:5px;word-break:break-word;" align="right">
                                 <!--[if mso | IE]><table align="right" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                 <table style="float:none;display:inline-table;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="right">
                                   <tbody>
                                     <tr>
                                       <td style="padding:5px;vertical-align:middle;">
                                         <table style="background:#5B5B5B;border-radius:32px;width:34px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                           <tbody>
                                             <tr>
                                               <td style="padding:6px;font-size:0;height:34px;vertical-align:middle;width:34px;">
                                                 <a href="https://www.instagram.com/rival.finance?igsh=NTJidnducGpkbGoz" target="_blank">
                                                   <img width="34" style="border-radius:32px;display:block;" src="https://cdn.getvero.com/dd-editor/ui-assets/icons/social/instagram.png" height="34" title="https://www.instagram.com" alt="https://www.instagram.com">
                                                 </a>
                                               </td>
                                             </tr>
                                           </tbody>
                                         </table>
                                       </td>
                                     </tr>
                                   </tbody>
                                 </table>
                                 <!--[if mso | IE]></td><td><![endif]-->
                                 <table style="float:none;display:inline-table;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="right">
                                   <tbody>
                                     <tr>
                                       <td style="padding:5px;vertical-align:middle;">
                                         <table style="background:#5B5B5B;border-radius:32px;width:34px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                           <tbody>
                                             <tr>
                                               <td style="padding:6px;font-size:0;height:34px;vertical-align:middle;width:34px;">
                                                 <a href="https://rival.finance" target="_blank">
                                                   <img width="34" style="border-radius:32px;display:block;" src="https://cdn.getvero.com/dd-editor/ui-assets/icons/social/web.png" height="34" title="https://www.example.com" alt="https://www.example.com">
                                                 </a>
                                               </td>
                                             </tr>
                                           </tbody>
                                         </table>
                                       </td>
                                     </tr>
                                   </tbody>
                                 </table>
                                 <!--[if mso | IE]></td></tr></table><![endif]-->
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;word-break:break-word;">
                                 <div style="height:16px;line-height:16px;"> </div>
                               </td>
                             </tr>
                             <tr>
                               <td style="font-size:0px;padding:0px;padding-top:0px;padding-right:10px;padding-bottom:0px;padding-left:10px;word-break:break-word;" align="right">
                                 <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:14px;line-height:1.5;text-align:right;color:#5B5B5B;">2024 Rival All rights reserved<br><br>Unsubscribe</div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!--[if mso | IE]></td></tr></table><![endif]-->
             </td>
           </tr>
         </tbody>
       </table>
     </div>
     <!--[if mso | IE]></td></tr></table><![endif]-->
   </div>
 </body>
   </html>
   `;
   },
};