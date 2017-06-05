<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="gimnasio3">
 	<html>
      <head>
        <title>Gimnasio Zubiri</title>
      </head>
      <body bgcolor= "#8BC1CE">
        <center>      
          <img src="{/gimnasio3/info/logo}" width="100px" heigth="100px"/>   
          <h1><xsl:value-of select="/gimnasio3/info/gim_nombre"/></h1>
          <h2><xsl:value-of select="/gimnasio3/info/direccion"/></h2>
          <br/>
          <a href="mailto:{/gimnasio3/info/web}"><xsl:value-of select="/gimnasio3/info/web"/></a>
          <h1>SOCIOS</h1>
        
        </center>
        <br/>
        <table align="center" width="1024px">
          <xsl:for-each select="/gimnasio3/socios/socio">
          <tr>
            <td rowspan="2">
                <img src="{foto}" width="100px" height="100px" align="center"/>
            </td>
            <td bgcolor="#9DA7BB" align="center"><xsl:value-of select="nombre"/></td>
            <td bgcolor="#9DA7BB" align="center"><xsl:value-of select="apellido"/></td>
          </tr>             
          <tr>
              <td bgcolor="#FFFFFF" align="center"><xsl:value-of select="direccion"/></td>
              <td bgcolor="#FFFFFF" align="center"><b>Codigo socio: </b><xsl:value-of select="@idsocio"/></td>
          </tr>
          <tr>
          	<td bgcolor="#9DA7BB" align="center"><b>Telefono: </b></td>
          	<td bgcolor="#9DA7BB" colspan="2" align="center"><b>Email: </b></td>
          </tr>
          <tr>
          	<td bgcolor="#FFFFFF" align="center"><xsl:value-of select="contacto/telefonos/numero_telefono"/></td>
          	<td bgcolor="#FFFFFF" colspan="2" align="center"><xsl:value-of select="contacto/emails/email"/></td>
          </tr>
          <tr>
          	<td bgcolor="#9DA7BB" align="center"><b>Deportes: </b></td>
          	<td bgcolor="#9DA7BB" colspan="2" align="center"><b>Sesiones: </b></td>
          </tr>
          <tr>
          	<td bgcolor="#FFFFFF" align="center"><xsl:value-of select="deportes/deporte/@nombredeporte"/></td>
          	<td colspan="2" bgcolor="#FFFFFF">
          	<xsl:value-of select="deportes"/>
              <input list="{deporte}"/>
              <datalist id="{deporte}">
                  <option value="{.}"/>            
              </datalist>
              </td>
          </tr>
          <tr>
              <td colspan="3" bgcolor="#368844">
                <hr/>
              </td>
            </tr>

          </xsl:for-each>
             
        </table>
        
      </body>
    </html>
 
  </xsl:template>
</xsl:stylesheet>