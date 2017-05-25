<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="pizzeria">
    <html>
      <head>
        <title>Pizzeria Italiana</title>
      </head>
      <body>
        <center>          
          <h1><xsl:value-of select="/pizzeria/informacion/nombre"/></h1>
          <img src="{/pizzeria/informacion/logo/@carpeta}" width="100px" heigth="100px"/>
          <br/>
          <a href="mailto:{/pizzeria/informacion/email}"><xsl:value-of select="/pizzeria/informacion/email"/></a>
        
        </center>
        <br/>
        <table align="center" width="1024px">
          <xsl:for-each select="/pizzeria/pizzas/titulo">
          <tr>
            <td colspan="3" bgcolor="#cccccc">
              <h2 align="center"><b><xsl:value-of select="@nombre"/></b></h2>
            </td>
          </tr>
            <xsl:for-each select="pizza">
            <tr>
              <td bgcolor="#ccccff"><b><xsl:value-of select="nombre"/></b></td>
            </tr>
            <tr>
              <td >
                <img src="{foto}" width="100px" height="100px"/>
              </td>
            </tr>
            <tr>
              <td bgcolor="ccffcc"><b>Ingredientes: </b></td>
            </tr>
            <xsl:for-each select="ingredientes/ingrediente">
              <tr>
                <xsl:value-of select="text()"/>
              </tr>
            </xsl:for-each>
            <tr>
               <td bgcolor="#E5C327"><b>Stock: </b><xsl:value-of select="@stock"/></td>
            </tr>
            </xsl:for-each>            
          </xsl:for-each>
          Visita--<xsl:value-of select="/pizzeria/informacion/email"/>   
        </table>
        
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>