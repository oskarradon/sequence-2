### Sequence Press Shopify Theme

#### Description:
A simple Shopify theme based off of the Skeleton theme.

#### Installation:
1. Install xcode from App Store.
2. [Install homebrew & node](https://blog.teamtreehouse.com/install-node-js-npm-mac) tl;dr: ``` ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ``` and ``` brew install node ```
3. ``` npm install ```
4. Create ``` .env ``` file using [this template](https://shopify.github.io/slate/docs/connect-to-your-store), and create a private app through the admin panel using those same instructions
5. These next instructions are for generating SSL certificates to fix a problem where styles weren't loading and my browser was throwing "Potential Security RISK!!!" warnings and are from [this issue](https://github.com/Shopify/slate/issues/726#issuecomment-425675011):
6. ``` brew install mkcert``` and ``` mkcert install ```
7. In a perfect world add this to your ``` .bash_profile ``` or just copy & paste (I know, I know D.R.Y.) each time you open the project:
```bash
  function ssl-check() {
    f=~/.localhost_ssl;
    ssl_crt=$f/server.crt
    ssl_key=$f/server.key
    b=$(tput bold)
    c=$(tput sgr0)

    local_ip=$(ipconfig getifaddr $(route get default | grep interface | awk '{print $2}'))
    # local_ip=999.999.999 # (uncomment for testing)

    domains=(
        "localhost"
        "$local_ip"
    )

    if [[ ! -f $ssl_crt ]]; then
        echo -e "\n🛑  ${b}Couldn't find a Slate SSL certificate:${c}"
        make_key=true
    elif [[ ! $(openssl x509 -noout -text -in $ssl_crt | grep $local_ip) ]]; then
        echo -e "\n🛑  ${b}Your IP Address has changed:${c}"
        make_key=true
    else
        echo -e "\n✅  ${b}Your IP address is still the same.${c}"
    fi

    if [[ $make_key == true ]]; then
        echo -e "Generating a new Slate SSL certificate...\n"
        count=$(( ${#domains[@]} - 1))
        mkcert ${domains[@]}

        # Create Slate's default certificate directory, if it doesn't exist
        test ! -d $f && mkdir $f

        # It appears mkcert bases its filenames off the number of domains passed after the first one.
        # This script predicts that filename, so it can copy it to Slate's default location.
        if [[ $count = 0 ]]; then
            mv ./localhost.pem $ssl_crt
            mv ./localhost-key.pem $ssl_key
        else
            mv ./localhost+$count.pem $ssl_crt
            mv ./localhost+$count-key.pem $ssl_key
        fi
    fi
}
```
8. Then run ``` ssl-check ```
9. Run ``` npm start ``` to spin up an Express server with the development theme.


#### Credits:
Thank you to the developers who made Slate, the developer of the first Sequence Press theme, the people who invented git, Github, Mozilla, all people who developed the npm packages this runs with, my teachers at Epicodus, my family, my girlfriend, my friends, Tim Berners-Lee, Alan Turing, Ada Lovelace, mother Earth. 

#### License:
Not freeware, not sure what license.

#### To-do:

- [x] xl screen sizes?
- [ ] use one events and postings blog and use tags to separate
- [ ] implement sass partials based on page type instead of having everything in one big stylesheet aka best practices :)
