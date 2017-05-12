<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="website">
    <html>
      <head>
        <title>My Movie Website - Exam</title>
      </head>
      <body>
        <center>
          <img src="{/website/info/logo/@path}" width="100px" heigth="100px"/>
          <h1><xsl:value-of select="/website/info/name"/></h1>
          <br/>
          Contact: <a href="mailto:{/website/info/email}"><xsl:value-of select="/website/info/email"/></a>
        
        </center>
        <br/>
        <table align="center" width="1024px">
          <xsl:for-each select="/website/movies/category">
          <tr>
            <td colspan="2" bgcolor="#cccccc">
              <h2 align="left"><xsl:value-of select="@cat"/></h2>
            </td>
          </tr>
            <xsl:for-each select="movie">
            <tr>
              <td rowspan="6">
                <img src="{poster}" width="200px" height="300px"/>
              </td>
              <td><b>Title: </b><xsl:value-of select="title"/></td>
            </tr>
            <tr>
              <td><b>ISBN: </b><xsl:value-of select="isbn"/></td>
            </tr>
            <tr>
              <td><b>Rating: </b><xsl:value-of select="@rating"/></td>
            </tr>
            <tr>
              <td><b>Score: </b><xsl:value-of select="score"/></td>
            </tr>
            <tr>
              <td><b>Director(s): </b>
              <input list="{title}"/>
              <datalist id="{title}">
                <xsl:for-each select="directors/director">
                  <option value="{.}"/>
                </xsl:for-each>
              </datalist>
              </td>
            </tr>
            <tr>
              <td><b>Actor(s)/Actress(es): </b>
              <input list="{isbn}"/>
              <datalist id="{isbn}">
                <xsl:for-each select="actors/*">
                  <option value="{.}"/>
                </xsl:for-each>
              </datalist>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <hr/>
              </td>
            </tr>
            </xsl:for-each>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
