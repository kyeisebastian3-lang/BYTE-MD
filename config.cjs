const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "CYPHER-X:~UEsDBBQAAAgIALq8LVuIkCe1TgQAAGwHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3ltawTkYlPVVYOIgHgDVNSteYgQIHI1BASn*O9btNMz87A728tTSFLnfOe75DvIC1whC3VA*g5KghtIUb+kXYmADCZ1GCICBiCAFAIZKHppC5Vkvp7uRuWm9aqZbcW9bom+t8RL6NPL633K16OCOb6BxwCU9TnF*h8Kdrbxkg7ntL5OZzGnYSwoK*M+bNczzrYLdpk5N50Xfenu8W*g0VeEmOA80soYZYjA1ELdBmLyOfiWnoVqnB8uTu6J56vG+bXtarXVjCtmaA4dJzvOvR1lic5*Dn5muYtbha0OTwILCzpVhtdWV6eX*eW+gQWLlyk33Zs4x8kTfoWjHAVmgHKKafdp3m+rq8DNCyOwUUOP1GsW+VC978Q5vlZHzpM8xd8JPITmofgccAb563AtFqSe+0K9ccI0P0RDqU5HZ41BUd3hZttcfHbW8r8D35APryT*h3dv7W26YiTtmVPMk5n02ioLzTH9NCsOWzKFR90YSQvbLjLzc*CF3TQsNsrovvJU72w0jTbeiwn*MrL3+7Sm9qQ7mkk8DmrmN*iQ1uRPKGdjHnrqaeYZ5JaHyerq61FCp651ZFB40ZmpNYVXU49hnhmJZh3Hu6PZOUreDKHZbkR+Fu1PXkYgO8d7O2ovzoG7TZS394kS1JkBkNnHABAU4YoSSHGR93uiNAAwaFzkE0Tf2QVIMi4jcTcJpOu2mzkocE*eLT6zB+UqKsmMq7Wch5MVi4bKGxiAkhQ+qioUGLiiBemWqKpghCog**VtAHLU0qdufbcROwAhJhXd5XWZFjD4EPXjEPp+UefU7XJf7ReIAJn5tY0oxXlU9TTWOSR+jBukxpBWQA5hWqGfAyKCAiBTUqOfoVWLoOedt7XpQlIEMADZux44ADLgRiNBGDMiMxbHMvu1+nLrq8Ky*JIjCgYgfd7iuVeJG*MjURQYVma*9tuPn*D6agGiEKcVkIFqNVHbVnbHq8c2Oh4VV1Es5Z2yj3E+bPHk3by8ZiFxDk6I3HOqaPCyb3Ve23Ti0fc0fU3Fkl34i4x2*1gEyEBfuJyf8IfhcBg7zqoOb1cpTjQ*nKPFTBd49+5WryV73kcbI9ZWRuttHfTSKqqlBsxiYl+keQJbdrLWE++q8cs7eWGmt7e+W4Aa7KPfm61WqtFg1ln6l3B+ZdZtV7vMxEXYbPbWiHtpmRyuw83CyVaWtw05f56sPD*nWLVhIV6bMfH25asxXWwDN23tUzVcnlT7adj3wKQ*Hir87qVeqP43xOg99zns5ftP4Z64e3sxj8FvJX48JP8SxolrDk+5yOyZwyjJBHuiF6zv1JPpuM6MWTy5EHQN3JEqED8Cj8e3AShTSMOCZEAGMA9IgQMwAKSoe7+aeVj8oZmq7Ewleg6ewooqvzKwxRmqKMxKILOSII0ZUZTY560NKUoDVjGQQZ6NJufez51Sli6F9CNRQOm*dWaBx99QSwECFAMUAAAICAC6vC1biJAntU4EAABsBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB2BAAAAAA=,
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
