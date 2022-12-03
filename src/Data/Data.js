const Data = () => {
  const practicum = [
    {
      id: 1,
      img: "https://s3-alpha-sig.figma.com/img/a747/3a92/32d9bdcf1c707599b8b73cf17594e2b5?Expires=1670803200&Signature=eg39qfyXsI2XVYPZqlsxbg~rDGqzxseYnsFbXm1vrH64xAK4z4fQqp4iBURcDkc8CNSXPmeW1mTuURXPwCRg79QseerhOpRvBqvIjUerQqR2w3YBP1HUXbY8gwLvnTTK-XeS0kc5EDl8BkWf19EtiwdGwa3EAu~gN177SoDEqGpr9QgTYEI5oa4UpzGDrbSza816QcblzdSW7iqtueyHF5NWyu4VZliC936Tk0Sr~w8h16Un2lS7woa3gXQ4Uj7NIBJ9t52x7uPC6cWo0TU74gEoTsvZ6MSYtxRe0kwD-Pzq-~ikE7utcSsFyk5oMw89yUgJJJRvFy8kcU2UJsZjXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      path: "data-science",
    },
    {
      id: 2,
      img: "https://s3-alpha-sig.figma.com/img/ab7f/4b5b/a79994dee84bb860277ee6bdd93eb455?Expires=1670803200&Signature=d~YS58-HAMAlRlGzC2~45l3cz57Fm3IflCQ460okYR0tdB9sbVbvTNdH4f-EwaWXY2EFiKwzowHsge0eokY5THpRSPSarxdCEM66niNdwSTi2wx7YPCKDJf6r99udD5wC2Nf9Fx2ctZY4X3NTYlTXMho0S0mLwNx1-gAZo-bG1u7hQ-nnM9oChTfcL31g7857JRlBPGGH4zfJoKW17W4KOUL5mkf46XUw5HyroYHyMUYx5BSuFyz1EyGkW8eM8SpEFKEtxxnD8fQG4jqxUmPmkRsBy3aR0nq-lbylmublZ36bK3C3FmuEzL7Op~TTlQ6-g~zBOAe024R-dbe53aHtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      path: "fullstack_py",
    },
    {
      id: 3,
      img: "https://s3-alpha-sig.figma.com/img/8337/5e5b/044988246050b5143520d1c845435b3e?Expires=1670803200&Signature=O9X8tE9YRNJ49xdx08rWrKUIjbbeTcapRShS-gQm77OSoi2YJ7UUEWQQl4B-hgwT5F4SjR~06ZpyQAW6qIahR3DDHss8tKR6X3bVflpremOSHXeu5XRWFHkCrjQmgF13Gd-4RnKMEm01~HSFx-PDn-NbHyjHkHg3d0K2Dc7LNp65ceFLpi71TSCo-fLdTe6OHhwRZC0aAClI7yYcd2Y5B~CYWMQvqpHb7jPwtwwRfJrz98IyfTzRV7gVpWtpO-ewpGvgvWfHEmd2XIllSnBPdCPoMSvinconHp96JgWOEZIBW0b7mATw6c3W8abPyyglEtnHqelMEGudK8P1gYpNfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      path: "fullstack_js",
    },
    {
      id: 4,
      img: "https://s3-alpha-sig.figma.com/img/e819/2dc5/0a18a1141e08b7dd4eaec6f6c72bd1ec?Expires=1670803200&Signature=e-8CUMHtLGFiQMQWVLI2w-TbzQjds5wYm9-BiD7rTwqCzPbyosm1rEZm-mj1oV5UFcWALm4U1TKrawhum0qWbEqZIbtK1RtFVEUVpc9ZSLGJkrP2vPUerMxptuOTo6TQgdbELoPavJuhonudUh8t6r1RUnQLGlbRKRnOQUNk2VxLL387lA7FTDzQ3-VbbcVbrMzC1DOD0pO8-ndaUUpYCDqmdb-SEkIeYXMESbMRubnDrOLgdeq9oLBx-YR2ScA-IQvdtyQcmdJ0Nj3VlstswZwNKQv8o9XQbMLmBaArEqVQe5l~UTnE7t3g1439uDOOLzMySG1PgvlW90kejP2vOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      path: "ios",
    },
    {
      id: 5,
      img: "https://s3-alpha-sig.figma.com/img/946c/0ed3/168b16ce4a286ef7cfa1ae1ce5e0f9b8?Expires=1670803200&Signature=Z3ApkCt2Aw4vUr7UwerRTdoPo-q49CGsZ7g6KBjR4npulMaEmx5WhvXlLKiaIXx1A-mVBGPfIToBopsvAjKtOwMBtWX-n6ktHPrBX3DeRkCrxi~76sxn066Ek7MGsNO-T-OVw9RhUJIVdWHRj9rWMM9nLFtOOZ2UOv92MyKPdIGzSwg3CU-V7VCdeFoQZXD4rXmGFqFl22VwC3QlT5zWkWkEloX5vHZfYF9p-rEdxyb1L8HQnPOCXc6ckcyxhxWsdaBMwe7smWx4FNENP~I61c4Qye1iv2bTUth2enDJup4rSkE66l6kGzgXbUyoc1wgtQR4s2cA3Um-maTtSIiARQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      path: "fulstack_java",
    },
    {
      id: 6,
      img: "https://s3-alpha-sig.figma.com/img/0637/5b85/639b61741213a5aa78ac456cc50ae88b?Expires=1670803200&Signature=HQgxXKXIIL7~T-XWrgx31UaxsJ8n2EyKLMLk305H6dIiIgGWAmZ0Q~oKN9BOOXAL9NO3E2tshDThjPsaiBmIksWh6dUT3xkzPdIIOI8ujsQFDVuPWGuW7muMRGw4J8njdC0hIEB32fgPblGlTgbq0HlcstzYYmLbJQjd38pus~7n5eOjUlZ-s0HiMLozwH3~vPmxkzroC21ICEIjPylfH18ymU0~Cvi-0VmBL5E4HFOidwSgM0E-g1Ujw2bg6i8AoYQOPPkZGPiGPkGKx1wtDk2NdMSQQXNiaDLw86aU4iBMhgDm6siQPIGNxBxVKVEph14-D8DwKSDiwpqTM7B~sA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      path: "smm",
    },
    {
      id: 7,
      img: "https://s3-alpha-sig.figma.com/img/de78/a447/b840f28a687697f0074cc2a538f5a3df?Expires=1670803200&Signature=QFMg8UoVNkJUW0hulOqHqew7CdwnqViCXeGHnIymEDRkJZrh7uCWzk178o4M2pXBFBQuMAKkaV1kbKdgUJ6JTEvXpGaNmrnuDdjJbJgmOcgi2lc8TWz0wrledGtMA5ISPKMRvXly4TO7zKLvbYLNPCqS3XZx52E5Vv--9oaUtw2vMOt89UXSAzddMgJw-pWTpWvMMHzqxZDxdMWJ2D4F5N1GdpOMlcP95WKnvHC8Lj1YXJqL0ZKpfrrr-AGY~5GJ-nOfprOf3qiMRO2P1vIJ-CJ47CuW-lmfOGvjxRE3iVCbVl6e8PfqZBeBoj9LgsH7wm6Ri5YW8pXRTuKFX4Q82Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      path: "net_practicum",
    },
    {
      id: 8,
      img: "https://s3-alpha-sig.figma.com/img/72d9/2ab4/56b5a2a5eb0a98820015668e3094e29f?Expires=1670803200&Signature=XzXfYR7FqrPy3dIAtF4htSazeulkltqTDdovL2OCkpfrKg~r6xrU8dNuBhfMlXmyH~cyLPTJgH4sM68ruJ9T7D2Fl92H6RZmA2QIj1aZ7uV-uiKlHTh1hTp9PnvjzM6zjuCJJMz4ft2xroPJ1Guke0Vai0PXiCRIfFp1Fm2eTGW1zfeV8jioH6sno0fcg9vms6W2r9Z92Zkx4QG9cAKGzny5tljZ5ykgoxXZKUuTs6B6mqyrJxQ8thEg9epFdWqmsUvp8eL5lzP40Qh~ctt3ZMHaCFFDh6nkdG9d83nOFlxk2ZoXMeBlKiW1MT7z5HCjgGi1b7QDFWMzi5ICr43bcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 9,
      img: "https://s3-alpha-sig.figma.com/img/c0b2/4b8e/9775274516df04b1575769f02dd31e4c?Expires=1670803200&Signature=R1fh4dELJqustU~JPeMZYzGAP460aA~zunA7ANZ8hdSe9Hyz3KTD4V~vwg7NHro28YvDGLY4ZwkAza5bnbi0Y3HCttGxSYLaA6WU8-P58vQHmObDUaNoqtzEXUkUYXCsdKTFwvB5cPMZUyaFnzKsMTkmTU9P5tb941VWCUz69YgYzhqSjwvWW02IqxihSz8OQjv4ZHU43mQV1jWaQVcei1AnAcNjliEg-tB7fG0YAoXEOMKkYnESlm3qTWp4a2905lN4aIFOlHwJhRAf53sF8KYph8rzvcEvKXoYDl8WtlEYpN-h4PAXehsXJ81EHGK-BsnYYqee-G49FWzadX-BpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 10,
      img: "https://s3-alpha-sig.figma.com/img/639f/2295/1d46e319aaa78d01b4b8e55584c2d4f8?Expires=1670803200&Signature=fvYCrjsO-zAniejKGfNTawPku6cFR0AFjoYM9XHAM3XHceRjYSXiC2MNAsiOgfl3a23nt3shRq0lv~agnNLxsdixULkIkQYHq-7F5WglIlBdmNPXu80I-wIJOBHL6yG0ShmhfeQlwKTb8R249K2tU0xMvucxDK6xsV20tEeZCuOiQo4ApsEFo8rRHGDA4SitjUH~jVWLp4TubC0PhIotK~GUBd3WUfHLq0kuyceHw3~Yk6lU7ehUFH5aNCDtSqZW6BQaAlnJnnuzco~doocRjloPsvgqEtCEd1I-FtjFO5YC-CuG2g2U3~HB8wMkm9ltMC~rxNdhSxOde00amxqbqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 11,
      img: "https://s3-alpha-sig.figma.com/img/c267/fa50/69a73acaf1eb22aefc66f050e58cec43?Expires=1670803200&Signature=YCQcel9mi67SmHnsXgBuew4VnpyICesXy1rOGl7PE23cGMGeOwjLWFhQaQoz4u9EXnX8gnGm3mT8Vy809Dh8oi~iNAy8vi0Xjmwj-7fG95ny3oJG-CjtCT4Mj4NOeaidaalKhaMiAoMEW5CMlzLJLEv3e6Bk39Njy-CfHEQ8SD6NZ6RmOlejW6PIzMfrGSsagHJQ-5Tzm5viFkxluGORk2dJ7dB5hXqN04yOHV-a-Jkp5j3WCoUEjagmv26tcl3tHFptX5OZPT5ZIbSp5qh6BXOfNdFSDB~OS6~kSWg5niFqK46GfXo6TZFbaLRbdngfyxhopha1xomSC-oG21DQag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 12,
      img: "https://s3-alpha-sig.figma.com/img/4f54/8494/98fd08674791591a42090e670c74efa0?Expires=1670803200&Signature=BX2oU7qcXd4yy8Wyxgt7AviJIWwRXbRn2LPh~J3916KQm1LO3po7jzG~-t4ZrXVehkrWEiZvGWBNSApkBSZG6MCRP6g6pSoMgEvt9YRM1SgEJKpf50zjt1MsneR5kUU2gtAMi~8haEgpJvX-rmWhddmMTiSEQC9mzXRg1M0oLha5nina8NJOIZh3-cdyriT7tCLoE2JCg7nMhE6Covj7czTn-yyWWbe5-qgZI26lj208eZvO2NXT-s0yV3PSX16UfNlQVuGfiMedTQ9kiPRoiz1EcNDvChOrYv95MLdGepnZhIPYPZTwHnq-Mn1fJPkOupRE2ik0xKTGHPe0NdhLPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 13,
      img: "https://s3-alpha-sig.figma.com/img/c8fb/a8c7/0ec0a1a602a9500802f078ff9fe079fa?Expires=1670803200&Signature=eEFrLuPMeXlZ7mrnNt9yC32IDU2jS7xruGevryup0QcFOVk7YM-VdJ2p7Z-SzzuEk5b8hcjdY~WefQ3C-nzMXIOtqe4VyFpamm6tY3k-DnpBkDxKKBAQPrRnSw9t2hJU3EUtgXVzgh8T8BNBDMJ849qYymon3x-JP66ihCefbmrds6Y0vvFKcJe3X9k5IBp33We3~wxkUynDgJlH86SZ~D4CB2rNY85IhnWGTJZ2kZd2i~R-Suu9vJPtWpKpfv1I2JX3OCliIRC8e4Pc-oSgmsxpqm8Z5j1PampXPJKUqRXIpxSIukUhcBaNeBgZSMT3X~WimJzwtqyNVU9461-4jA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 14,
      img: "https://s3-alpha-sig.figma.com/img/e3ad/433e/8540939037d57af7ba9ecb407469a145?Expires=1670803200&Signature=gMZrx4GQqmYBeofY3hhbCF4pQtiq8ZaVf2Ib4m~fpwPBcdb7PCnWk9DIvhBZ7MvjWeAFyfg5MqsCBKK1yTL9GxFm4eJhjtn~5RQuPgDgcZOjSHKEz55QhTv6ApYAa6jVgyXrEnLnh-hip3Hl8zrlxB3mzuMIi4uQ5qDQnnDWq~n3zCyDJLBTwZHoOBXLlj-ydjeXgowIDJctm6KEMNoaGBGjxd4zorZR7zcz5E7Dcndp4eTXxX3-VO0YsbH6PWHXDfyXb5YP1SCk0Pd6y1eQPM3Z1233DeGzHmKfZvy6YyOICB8V2X16c3aV3-sjyA6gJ0Kfl1~JdupFdb73UVn8Dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 15,
      img: "https://s3-alpha-sig.figma.com/img/b270/1da4/3dbae0725681a338f44eb53688d46887?Expires=1670803200&Signature=QRT0wrMce5KRD81PYg0q3zeM76h0pPab~AYRPTR7yfEszvbn1XiWh28hGX6YkkiAfH3pbhBiH6W27csXkYNZV8x3lqziXmtNlYBKTqazXhjpNmQu~DsRVdU9Zp8X4bd5g6ex0li8L~aUKS1hQavUwstJZe~GfdywyFr-jgDyzJ6iDf3XYoLbB-ffQHLZatjSQoKnlFXPZROV2vgM884ypALHUOriEV295gTq69TrL2q~M0pau7QAlRGaG6UMRFE2lX129ROw-u-G9xc6ysy2b5jjuucEYiQzVuxXGYHfxCWVmEHFXGHMCi6WMAh5tioB9bYt6NY7XqPzMS-zqqL4-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ];
};
export default Data;
