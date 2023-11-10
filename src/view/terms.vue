<template>
  <div class="ypolicy">
    <span class="ypolicyti">{{ $store.state.txt.policy }}</span>
    <span @click="navigateBack()" class="ypolicygb">✕</span>
    <div class="yscroll" ref="scrollArea" @scroll="handleScroll()">
      <div class="yscrollbox" ref="scrollContent">
        <span>
          These Moon App (lsland tech ventures Itd.)Terms of Service govern your
          access to andthe use of the App (as defined below) and itsServices(as
          defined below).
        </span>
        <span
          >These Moon App(lsland tech ventures Itd.)Terms of Service together
          with any documentsexpressly incorporated by reference(“Terms”)are
          entered into by and between you (“you”or"User”) and the Company (as
          defined below,the“Company”or“we”), and constitutes alegally binding
          agreement between you andthe Company.You and the Company are each
          a“Party”and, together, the“Parties” to theseTerms.</span
        >
        <span
          >Please read the Terms carefully before youstart using the App or any
          of the Services. Byaccessing or using the App you acknowledgethat you
          have read, understood and acceptedto be bound by all of the terms and
          conditionsstipulated in these Terms.lf you do not agreewith all of the
          provisions of these Terms, or anyof these Terms is unacceptable for
          you, youmust not access or use the App or any of theServices.</span
        >
        <span
          >We reserve the right, at our sole discretion, tochange or modify
          these Terms at any time andwithout prior notice to you. Any and
          allchanges or modifications will becomeeffective immediately upon
          publication on theWebsite (with the“Last Revised” date on thetop) and
          you agree and acknowledge that youwill not be explicitly notified
          about possibleamendments and modifications. By continuingto access the
          App and the Services oncerevised Terms are published, you agree to
          bebound by its terms.Please ensure that youcheck the applicable Terms
          every time you useour App in order to understand which Termsapply.lf
          you have any questions or commentsregarding these Terms, please
          contact us atcontact@moonapp.io.</span
        >
        <span style="margin-bottom: 2rem"
          >To be eligible to use or access the App.including any Services
          offered on or throughthe App, you must be of legal age to form
          abinding contract(at least 18 years old in mostjurisdictions; or the
          applicable age of majorityand contractual capacity in your country
          ofresidence). By accessing or using the App,including any Services
          offered on or throughthe App, you represent and warrant that youare
          oflegal age to form a binding contract.</span
        >
        <span>Interpretation and definitions</span>
        <span
          >The following capitalized terms shall have themeanings hereinafter
          assigned to them unlessthe context clearly otherwise requires:<br />“App”shall
          mean Moon App, a mobile and websoftware application accessible through
          theWebsite,fully owned by the Company;<br />Claims” shall have the
          meaning set out inClause 10;<br />
          Company”or“we”shall mean lslandTechVentures Ltd., duly incorporated
          andregistered in Seychelles with entity numbel237444 and address 306
          Victoria House,Victoria, Mahe, Seychelles, represented bydirector
          Mr.Dovydas Zilys.<br />DEX”shall mean decentralized exchange;DLT”shall
          mean distributed ledgertechnology;<br />
          ETH”shall mean the cryptocurrency Ether;<br />Indemnified
          Party(ies)”shall have themeaning set forth in Clause 10;<br />Intellectual
          Property” shall mean all of ourintellectual property,including
          inventions,discoveries,processes,methods,
          compositions,formulae,techniques.information,source code,brand
          names,graphics,User interface design, text,logos,images,information
          and data pertaining to theServices, whether or not
          patentable.copyrightable or protectable in trademark,andany
          trademarks, copyrights or patents basedthereon;<br />
          Last Revised”shall mean the latest version ofthe Terms denoted by its
          date positioned atthe top of the document;<br />
          MOON”shall mean a unique utility token thatis native to Moon App;<br />
          “Privacy Policy”shall mean Moon App PrivacyPolicy, accessible at the
          Website andincorporated herein by reference, foradditional information
          regarding our privacyterms.<br />“Prohibited Jurisdiction” shall mean
          the USABelarus,Central frican Republic, DemocraticRepublic of Congo,
          Democratic People'sRepublic of Korea, the Crimea region ofUkraine,
          Cuba,lran, lraq, Kosovo, Lebanon,Libya, Somalia, Sudan, South Sudan,
          Syria,Venezuela, Yemen, and Zimbabwe;<br />“Services” shall have the
          meaning as set out in Clause 3;<br />“Terms”shall mean these Moon App
          Terms ofService including any other documentsincorporated herein by
          reference;<br />
          “Tokens”shall mean any digital asset which isbased on the
          cryptographic protocol of acomputer network that may be ()
          centralizedor decentralized,(ii) closed or open-source,and (iii) used
          as a medium of exchange and/orstore of value. Furthermore, a Token
          isexpressed as a unit; capable of beingtransferred, stored, and traded
          on a peer-to-peer basis with or without conditions orlimitations.<br />“User”
          or“you” shall mean you, the user of the Moon App;<br />“Wallet” shall
          mean a combination of a User'spublic address and corresponding private
          key(or mnemonic phrase or keystore file withpassword) that holds any
          tokens that arecreated and/or received on a public blockchainsuch as
          Ethereum or Binance Chain, whichmay associate with
          correspondingtransactions related to this address;
        </span>
        <span
          >Website”shall mean the Company's websitelocated at
          https://www.moonapp.io/.</span
        >
        <span>Access to the App</span>
        <span
          >By using the App, you represent and warrant that:<br />you have full
          legal capacity and authority toagree and bind yourself to these
          Terms;you are at least eighteen years of age or of theapplicable age
          of majority and contractualcapacity in each qualifying
          jurisdiction;you are aware of applicable laws andregulations governing
          your use of the Services.You shall be solely responsible for
          ensuringcompliance with the various applicable lawsand you shall be
          solely liable for any liabilitythat may arise due to a breach of
          yourobligations in this regard;your use of the Services is (A) not
          prohibitedby applicable law, and (B) at all timescompliant with
          applicable law;you are solely responsible for use of theServices
          and,if applicable, for all activitiesthat occur on or through your
          User account;you take steps to ensure the confidentiality ofyour
          personalinformation and restrict accessto the devices you use to
          access the App.you have carefully reviewed the content andhave
          understood and agreed to these Termscompletely(including all other
          documents,incorporated herein by reference);you waive the right to
          participate in a class orrepresentative action lawsuit or a
          classwidearbitration against Moon App,the Companyand any of its
          representatives or affiliates.</span
        >
        <span
          >To access the App and any of the Services, orsome of the resources
          they offer, you may beasked to provide certain registration details
          orother information.It is a condition of your useof the App and any of
          the Services, that all theinformation you provide is accurate,
          correct,current, and complete. You agree that allinformation you
          provide is governed by ourPrivacy Policy, and you consent to all
          actionswe take with respect to your informationconsistent with our
          Privacy Policy.</span
        >
        <span
          >You are solely responsible for implementingreasonable measures for
          securing youraccount,user name,password, or any otherpiece
          ofinformation as part of our securityprocedures, you must treat such
          informationas confidential, and you must not disclose it toany other
          person or entity. You alsoacknowledge that your App accounts
          arepersonal to you and agree not to provide anyother person with
          access to the App,orportions ofit, using your user name, password,or
          other security information. You are notallowed to use another User's
          account. Youagree to notify us immediately of anyunauthorized access
          to, or use of,your username or password or any other breach
          ofsecurity.You also agree to ensure that you exitfrom your account at
          the end of each session.The Company cannot and will not be liable
          forany loss or damage rising from your failure tocomply with this
          Clause 2.3 or to secure yourApp accounts and passwords,including,
          butnot limited, to selecting a password that is noteasily
          compromised.</span
        >
        <span>Services</span>
        <span
          >We provide a trading software applicationdesigned for exchanging
          Tokens.Usersconduct trading on our App directly with eachother. We do
          not partake as buyers or sellers inthese transactions.</span
        >
        <span
          >Moon App offers a range of advanced tradingservices and
          features,including: an order matching App that automatically,
          andaccording to pre-established criteria,matchesUsers'trades with open
          orders from otherUsers in respect of Tokens;Spot Trades that permit
          you to swap one typeof Tokens for another type of Tokens withanother
          User through an order-matchingengine without any fees.Your trades
          getrouted to multiple decentralized exchanges formaximum outcome and
          trade efficiency;Conditional Orders that enable you to set limitorders
          which automatically execute at yourspecified price targets; Sandwich
          Trades that enable you to generateyield by strategically utilizing
          your altcoinpositions to front-run trades; Presale Sniping which
          allows you to automatically execute trades on presalesbased on your
          specified tolerated gas cost;LP Pool Sniping that enables you to
          utilize ourbots to generate additional yield throughsniping fresh LP
          pools deployed by memecoindevelopers.Bots automatically scan and
          verytoken contracts for you;Copy Trading which enables you to copy
          thestrategies of successful traders by selecting awhale or call
          channel and setting your desiredparameters,and bots will
          automaticallyreplicate these portfolios by executing tradeson your
          behalf; Tracking real-time data of your tradingperformance; Referral
          program which you can use to obtain ETH payouts for every friend you
          invite to theMoon App.Your friends get free $25 dollars tosign up
          using your invite code;</span
        >
        <span
          >Moon App operates as a non-custodialexchange platform (referred to as
          DEX) whichimplies that we do not hold Users' Tokens,Wallets or private
          keys. Our Services facilitatepeer-to-peer transactions that match
          userswith other users.You hereby acknowledge andagree that we do not
          operate as a centralizedthird party exchange and that we will not
          beheld liable for any losses resulting from yourtransactions.</span
        >
        <span
          >Moon App also provides its native utility token,known as MOON, with
          various utilities andbenefits for MOON holders and stakers,
          including:<br />Buy Backs:MOON stakers have the power tovote on using
          App fees to buy back MOON tokens.<br />MOON Burn:MOON stakers can also
          vote onusing App fees to burn MOON tokens acquiredvia buy-backs.<br />
          Staking Yield: MOON stakers can vote todistribute MOON token as a
          staking yield.Holder Power-Ups 8 Perks:MOON holdersbenefit from
          increased trade speed andthroughput,along with access to a
          privacylayer that safeguards trades against MEV botattacks.</span
        >
        <span
          >By using our Services you acknowledge andagree that we do not provide
          any financialservices, including but not limited toinvestment advice,
          financial planning,orbrokerage services.You further acknowledgeand
          agree that MOON token is a utility tokenand is not intended to be used
          as a financialinstrument orinvestment vehicle.lt isdesigned solely for
          specific uses within ourApp, such as accessing certain
          features,services,or benefits.</span
        >
        <span
          >Changes to Services.We reserve the right, inour sole discretion, to
          modify or discontinue.temporarily or permanently, the Services orany
          part thereof with or without notice. Youagree that we will not be
          liable to you or anythird party for any modification, suspension
          ordiscontinuance ofthe Services.</span
        >
        <span>Fees and taxes</span>
        <span
          >By using the Services you agree to pay allapplicable fees.Any fees or
          any other prices ofthe Services shall be stated at all times on
          ourWebsite(moonapp.io) and made available toyou before using the
          Services.Unless explicitlystated otherwise,all fees and prices
          areexclusive of any applicable value-added tax(VAT) or other
          taxes.</span
        >
        <span
          >You bear sole responsibility for paying any andall taxes, duties, and
          assessments now orhereafter claimed or imposed by
          anygovernmentalauthority associated with theiruse of the App and the
          Services, and/orpayable as the result of using and/or exploitingany
          crypto assets and interacting with smartcontracts.Blockchain-based
          transactions arenovel, and their tax treatment is uncertain.</span
        >
        <span
          >Fee changes. We may, in our sole discretionand at any time, modify
          the fees for theServices.We will provide you with a reasonableprior
          notice of any change in fees to give youan opportunity to terminate
          your accountbefore such change becomes effective.lf youdo not agree to
          the fee change you mustcancel your account in order to avoid
          futurecharges.lf you use the Services after a feeincrease you will be
          deemed to have acceptedthe fee change. We will not be liable to you
          orany third party for any fee change.</span
        >
        <span style="margin-bottom: 2rem"
          >Refounds.Except when required by law, feesare non-refundable.</span
        >
        <span>Your responsibilities</span>
        <span
          >You shall not use the Services in any mannerexcept as expressly
          permitted in these Terms.Without limiting the generality of
          thepreceding sentence, you may not:infringe any proprietary rights,
          including butnot limited to copyrights, patents, trademarks.or trade
          secrets of the Company;</span
        >
        <span
          >use the Services to transmit any data or sendor upload any material
          that contains viruses,Trojan horses, worms, time-bombs,
          keystrokeloggers, spyware, adware, or any other harmfulprograms or
          similar computer code designedto adversely affect the operation of
          anycomputer software or hardware;<br />use any robotspider, other
          automated deviceor manual process to monitor or copy theServices or
          any portion thereof other thancopying or exporting as permitted by the
          Terms;<br />
          make any back-up or archival copies of thePlatform or any part
          thereof, including thedisassembling or de-compilation, or
          reverseengineering of any of the closed-source orproprietary software
          running on the Platform;trade or obtain financing on or through
          thePlatform, or use any Service, with anythingother than funds, keys,
          or Digital tokens thatyou have legally obtained;<br />if you are a
          resident or national of a ProhibitedJurisdiction or a U.S.Person,
          access thePlatform or any Services using any virtualprivate network,
          proxy service, or any otherthird party service, network, or product
          withthe intent of disguising your IP address or location;<br />use the
          Services in (A) any unlawful manner or(B) for fraudulent or malicious
          activities, or (C)in any mannerinconsistent with these Terms.or(D)
          violate applicable laws in any manner.</span
        >
        <span
          >By using the Services you expressly agree thatyou are solely
          responsible:<br />for keeping your own keystore
          files,passwords,mnemonic phrases and/or privatekeys. You are solely
          responsible for any loss toyour Wallet. Your Wallet is not accessible
          byMoon App nor by the Company,and we will notkeep your keystore
          files,passwords,mnemonicphrases and/or private keys.<br />to
          familiarise yourself with the Platform, theServices,and its intended
          usage. You agree tofollow all the requisite steps involved in usingthe
          Platform as intended. We will not be liablefor any wrongful use of the
          Platform due touser error.</span
        >
        <span>Acknowledgement and assumption of risks.</span>
        <span
          >By engaging with our App, you acknowledgeand assume the inherent
          risks associated withthe holding and trading in cryptographictokens,
          blockchain technology and DLT field.Risks include, but are not limited
          to, thefollowing: Market Risk.The market for cryptographictokensis
          still new and uncertain.You shouldonly have funds invested in
          cryptographictokens or speculate in cryptographic tokens,ifyou are
          prepared to lose the entirety of suchtokens invested in.Whether the
          market for oneor more cryptographic tokens will move up ordown,or
          whether a particular token will lose allor substantially all of its
          value,is unknown.Youshould be cautious about holdingcryptographic
          tokens. We do not invite ormake any offer to acquire, purchase,
          sell,transfer or otherwise dealin any crypto assetYou are solely
          responsible and liable for anyand all trading and non-trading activity
          on orthrough the App and for any gains and lossessustained when using
          the Services.Liquidity and Listing Risk. Markets forcryptographic
          tokens have varying degrees ofliquidity. Some are quite liquid while
          othersmay be thinner.Thin markets can amplifyvolatility.There is never
          a guarantee that therewill be an active market for one to sell, buy,
          ortrade cryptographic tokens or productsderived from or ancillary to
          them. We make norepresentations or warranties about whether
          acryptographic that may be staked via the Appwill be traded on or
          through the App any pointin the future,if at all. ledal Risk.The lenal
          statiis of certain cryptographic tokensis uncertain.This canmean that
          the legality of holding or tradingthem is not always clear.Whether and
          how oneor more cryptographic tokens constituteproperty, or assets, or
          rights of any kind mayalso seem unclear.You are responsible forknowing
          and understanding howcryptographic tokens are addressedregulated,and
          taxed under laws that apply toYou. Trading Risk.In addition to
          liquidity risks,values in any digital token marketplace arevolatile
          and can shift quickly. You should payclose attention to your position
          and holdings,and how they may be impacted by sudden andadverse shifts
          in trading and other marketactivities.You also acknowledge and
          agreethat costs oftransacting on blockchaintechnologyis variable and
          mayincrease at anytime.You acknowledge and agree to theserisks and
          represent that we cannot be heldliable to changes and fluctuations in
          value orincreased costs.Technology Failure Risks.Risks associatedwith
          using an internet-based currency are: riskof hardware,software and
          internet connectionfailure or problems, risk of malicious
          softwareintroduction,and risk of third parties obtainingunauthorized
          access to infrastructure storedwithin your Wallet.You accept
          andacknowledge that we will not be responsiblefor any communications
          failures, disruptions.errors,distortions or delays when connectingyour
          Wallet and using Ethereum network orany chain or similar device for
          processingtransactions,however caused.You agree andacknowledge that we
          do not represent or warrant that any ofthe Services or the App
          aresecure from hacker or other malicious attack,which may result in
          stealing or loss of Userconfidentialinformation or any other data.
          Youacknowledge that we will not be responsiblefor and will not replace
          any tokens lost due tothird-party malicious acts or due to
          othercircumstances beyond our control.The Services-related risks.You
          acknowledgethe risks of using the Services.You bear soleresponsibility
          for evaluating the Servicesbefore using them, and all
          transactionsaccessed through the Services are irreversiblefinal, and
          without refunds.The Services maybe disabled,disrupted or adversely
          impactedas a result of sophisticated cyber-attacks,surges in activity,
          computer viruses, and/orother operationalor technical challenges,among
          other things.We disclaim any ongoingobligation to notify you of all of
          the potentialrisks of using and accessing our Services.Youagree to
          accept these risks and agree that youwill not seek to hold us
          responsible for anyconsequentlosses.Quality or accessibility risks.As
          a condition toaccessing or using the App or the Services,
          youacknowledge,understand, and agree that fromtime to time,the App and
          the Services may beinaccessible orinoperable foranyreason.including,
          but not limited to equipmentmalfunctions,periodic
          maintenanceprocedures or repairs,causes beyond oulcontrolorthat we
          could not reasonaplyforesee, disruptions and temporary orpermanent
          unavailability ofunderlyingblockchain infrastructure or unavailability
          ofthird-party service providers or externalpartners for any reason.<br />Novel
          technology risks. Blockchain technologyor distributed ledger
          technology-relatedprojects are new and relatively untested andoutside
          of our exclusive control. Youacknowledge and agree that cryptography
          is aprogressing field and that there are risks wecannot foresee and it
          is unreasonable tobelieve that such risks could have
          beenforeseeable.Advances in code cracking ortechnical advances may
          present risks to smartcontracts, cryptographic tokens and the
          App,which could result in theft or loss of yourcryptographic tokens or
          property, among otherpotential consequences.By using the Servicesyou
          acknowledge and agree to undertake theserisks.</span
        >
        <span
          >Please note that this statement serves as ageneral description of
          risks associated withblockchain technologY, DLT field andcryptographic
          tokens and should not beconsidered exhaustive.Itis essential toconduct
          thorough research and seekprofessional advice to fully understand
          therisks involved before engaging in activitiesrelated to
          cryptographic tokens or blockchaintechnology.</span
        >
        <span style="margin-bottom: 2rem"
          >You agree and understand that you are solelyresponsible for
          determining the nature,potential value, suitability,
          andappropriateness of these risks for yourself andthat you access and
          use the App and theServices at your own risk. You acknowledgeand agree
          that we are not liable for any losses,damages, or liabilities arising
          from the risksassociated with the blockchain,DLT field,
          andcryptographic tokens.</span
        >
        <span>No representation and warranties of theCompany</span>
        <span
          >We make no representations and warranties.The Services and the App
          are provided on an“as is”and “as available”basis.We make noguarantees
          ofany kind in connection with theServices.Your use of the Services and
          the Appshall be at your own risk.The Services,and theApp are provided
          “as is” without any expressor implied warranty of any kind,
          includingwarranties ofmerchantability, merchantablequality, legal
          effect, accuracy,appropriateness,completeness,non-infringement,or
          fitness for a particularpurpose.We do not warrant that the Servicesor
          the App will be error-free, will meet yourrequirements,or be timely
          and secure.You willbe solely responsible for any damage resultingfrom
          the use of the Services and the App.</span
        >
        <span style="margin-bottom: 2rem"
          >We make no warranties and representationsthat the Services and the
          App have been andwill be provided with due skill, care anddiligence or
          about the accuracy orcompleteness of Services and the Appcontent and
          assumes no responsibility for.errors,mistakes orinaccuracies of
          content;personalinjury or property damage, of anynature whatsoever,
          resulting from your accessand use of the Services and the App;any
          unauthorized access or use of our serversand/or any and all personal
          information and/orfinancialinformation stored therein;anyinterruption
          or cessation oftransmissionto or from the App; any bugs, viruses,
          Trojan horse, or the like thatmay be transmitted to or through the
          actionsof any third party; any loss of your data or content from the
          App;and/or any errors and omissions in any content or forany loss or
          damage of any kind incurred as aresult of the use of any content
          posted,emailed, transmitted, or otherwise madeavailable via the
          Services and the App.You will not have the right to make or pass
          anyrepresentations or warranties on behalf ofMoon App to any third
          party.</span
        >
        <span
          >No advertisement. You explicitly acknowledgeand agree that we do not
          advertise.recommend or advise any trading orexchanging of Tokens, or
          any other formtransaction on our App.</span
        >
        <span
          >No endorsement.We do not warrant, endorse,guarantee, or assume
          responsibility for anyServices on our App and we will not be liablefor
          any transaction between you and otherusers. You are solely responsible
          for theexecution ofyour transaction.</span
        >
        <span
          >No financial advice. We do not provideinvestment and/or financial
          advice in anymanner whatsoever.Any information madeavailable on the
          App should in no event beconstrued as providing any investment orother
          financial advice of any kind.you shouldalways seek financial and/or
          investment adviceand do your own independent research beforeusing our
          App or our Services.if you choose toengage in transactions based on
          content onthe App, then such decisions and investmentsand any
          consequences flowing therefrom areyour sole responsibility.</span
        >
        <span
          >You represent and warrant that you are theultimate and effective
          legal and beneficialowner of any Tokens transferred to youraccount or
          Wallet on the Website, that youshall not act as nominee or trustee for
          anyother person and that you shall not transfer,assign, pledge, charge
          or otherwise create anysecurity interest or encumbrance whatsoeverover
          such Tokens.</span
        >
        <span
          >We shall not ask for any password or privatekeys from our users, nor
          shall we ask users totransmit any funds or Tokens, as
          applicable.Accordingly, we shall not be responsible forany losses
          caused by your transmittal of fundsor Tokensas applicable.</span
        >
        <span>Limitation of Liability</span>
        <span
          >To the fullest extent permitted by applicablelaw:( in no event will
          the Company or any ofits representatives or any of the Companyparties
          be liable for any indirect,special,incidental,consequential,punitive
          orexemplary losses or damages of any kind(including, but not limited
          to, where related toloss of revenue, income or profits, diminutionof
          value,loss of use or data, loss or depletionof goodwill, loss of
          business opportunity, lossof contract,damages for
          businessinterruption,loss of anticipated savings, or thelike) arising
          out of or in connection with anyacceptance of or reliance on these
          Terms,orwith the use the App and/or the Services orotherwise related
          to these Terms, regardless ofthe form of action, whether based in
          contract,tort (including, but not limited to, simplenegligence,
          whether active,passive orimputed),or any other legal or
          equitabletheory(even if the party has been advised ofthe possibility
          of such damages and regardlessof whether such damages were
          foreseeable);and (ii) in no event will the aggregate liabilityof the
          Company and any ofits representativesweather in contract, warranty,
          tort (includingnegligence,whether active, passive orimputed), or other
          theory, arising out of or inany way related to these Terms,the access
          anduse of the App the Services,exceed 0.01 ETH.</span
        >
        <span>Indemnification</span>
        <span
          >By agreeing to these Terms and accessing theApp and the Services, you
          agree, to the fullestextent permitted by applicable law, toindemnify,
          defend, and hold harmless theCompany,its past, present and
          futureaffiliates,subsidiaries and service providersand each of their
          past, present and futureofficers, directors, agents,joint
          venturersemployees,representatives,partners,andlicensors(collectively“Indemnified
          Parties”and each such person or entity individually,Indemnified
          Party”) from and against any andall actual or alleged claims,demands,
          damages,losses,liabilities,obligations. penalties,interest,
          fees,expenses(includingwithout limitation, attorneys' fees
          andexpenses)and costs(including, withoutlimitation, court costs, costs
          of settlementand costs of pursuing indemnification andinsurance),of
          every kind and nature whatsoever,whether known or unknown. foreseen or
          unforeseen, matured or unmatured,or suspected or unsuspected,in law or
          equity.whether in tort,contract,orotherwise,(collectively,“Claims”),
          that arisedirectly or indirectly out of: your use or misuse of the App
          and the Services or any contract related thereto: violation, breach or
          alleged breach of anyprovision of these Terms by you or any
          personusing the Services on your behalf; your violation of any
          applicable laws, rulesregulations, codes, statutes,
          ordinances,ororders of any governmental or quasi-
          governmentalauthorities; anything you contribute to the Services;your
          violation of the rights or obligations of any third party, including
          any intellectualproperty right, publicity, confidentiality,property,
          or privacy right;your negligence or wilful misconductany
          misrepresentation made by you;orany other matter for which you are
          responsiblehereunder or under law.</span
        >
        <span
          >You agree that your use of the App andServices shall be in compliance
          with allapplicablelaws, regulations and guidelines.</span
        >
        <span style="margin-bottom: 2rem"
          >We reserve the right to assume, at yourexpense, the exclusive defense
          and control ofany matter subject to indemnification by you.You agree
          to promptly notify us of any Claimsand cooperate with our defense of
          any Claims.You will not in any event settle any Claimswithout our
          prior written consent.</span
        >
        <span>Termination rights</span>
        <span
          >These Terms shall remain in force and effectunless terminated while
          you use the App.Without limiting any other provision of theseTerms, we
          reserve the right to, in our solediscretion and without notice or
          liability, denyaccess to or use the App (including blockingcertain IP
          addresses) to any person for anyreason or for no reason, including
          withoutlimitation, for violation or breach of anyrepresentation,
          warranty or covenantcontained in these Terms or any applicable lawor
          regulation. We may, in our sole discretionand without notice,terminate
          your use orparticipation in the App or delete your accountand any
          content or related information andfiles in your account and/or bar any
          furtheraccess to such files or the Services.</span
        >
        <span style="margin-bottom: 2rem"
          >lf we terminate or suspend your account forany reason, you are
          prohibited from registeringand creating a new account under your
          name,afake and borrowed name,or the name of anythird party, even if
          you may be acting on behalfof the third party.In addition to
          terminating orsuspending your account, we reserve the rightto take
          appropriate legal action,includingwithout limitation pursuing civil,
          criminal andinjunctive redress.</span
        >
        <span>Intellectual property</span>
        <span
          >These Terms shall not be understood andinterpreted in a way that they
          would mean theassignment oflntellectual Property rightsunless it is
          explicitly defined so in these Terms.You may not use any of
          Intellectual Propertyfor any reason,except with our
          express,priorwritten consent.</span
        >
        <span style="margin-bottom: 2rem"
          >The Website, the App and any of the Services,including their design
          elements or conceptsand any and all underlying IntellectualProperty,
          including, but not limited tocopyrights,patents, service marks,
          anyregistered trademarks,domain names andother proprietary rights, are
          the property ofthe Company,and are protected by copyright,patent,trade
          secret and other intellectualpropertylaws.Unless otherwise
          expresslystated, the Company retains any and all rights,title and
          interest in and to the App and theServices(including, without
          limitation, allIntellectual Property rights), including
          allcopies,modifications,extensions andderivative works thereof. Your
          right to use theApp and the Services is limited to the rightsexpressly
          granted in these Terms.No licensesto use any of trademarks or any
          otherCompany's brands are to be inferred orassumed pursuant to the use
          of any oftheServices.All rights not expressly granted toyou are
          reserved and retained by the Company.</span
        >
        <span>Privacy Policy</span>
        <span style="margin-bottom: 2rem"
          >Please review our Privacy Policy, available at:moonapp.io/privacy By
          using the App,youagree to be bound by our Privacy Policy, whichis
          incorporated into these Terms.</span
        >
        <span>Force Majeure</span>
        <span style="margin-bottom: 3rem"
          >We will not be in breach of these Terms orliable for any delay or
          failure to perform anyobligation under these Terms where the delayor
          failure results from any event, circumstanceor cause beyond our
          reasonable control.TheParties agree that due to the specific nature
          ofthe blockchain / DLT field,the circumstancesof force majeure shall
          in particular include also(but shall not be limited to) interruption
          intelecommunications orinternet services ornetwork provider services,
          failure ofequipment,and/or software,hacker attacksmarket
          disturbances,other major event ornatural catastrophe,change oflaws
          orregulations,adverse regulatory or enforcementaction of public
          authorities,technical failuresand the like.</span
        >
        <span>Consumer Exclusion</span>
        <span style="margin-bottom: 2rem"
          >You hereby acknowledge and represent thatyou are not considered a
          consumerin relationto the Services provided, and the provisions ofany
          applicable consumer protection rules, orany consumer protection
          rights,includingdistance selling rules, shall be excluded to
          thefullest extent permitted by any applicable law.By using this
          App,you waive any consumerprotection rights and distance selling
          rightsthat may be applicable under any relevant law.</span
        >
        <span>Notices</span>
        <span
          >We may provide any notice to you under theseTerms by () posting a
          notice on the Website;or (ii) sending an email to the email
          associatedwith you. Notices we provide by posting on theWebsite will
          be effective upon posting, andnotices we provide by email will be
          effectivewhen we send the email.</span
        >
        <span
          >To give us notice under these Terms, you mustcontact us by email to
          contact@moonapp.io.We may update this email address for noticesto us
          by posting a notice on our Platform.Notices to us will be effective
          after they aresent.</span
        >
        <span style="margin-bottom: 2rem"
          >All communications and notices to be made orgiven pursuant to these
          Terms must be writtenin the English language. You agree andacknowledge
          that all agreements, notices.disclosures,and other communications
          thatwe provide to you, including these Terms, willbe provided in
          electronic form.</span
        >
        <span>Miscellaneous</span>
        <span
          >Entire Agreement.These Terms,including allother documents,
          incorporated herein byreference, represent the entire agreementbetween
          you and us regarding the subjectmatter of these Terms,in particular,
          the use ofthe App, and the Services.These Termssupersede all prior or
          contemporaneousrepresentations,understandings, agreements,or
          communications between you and us,whether written or verbal, regarding
          thesubject matter of these Terms.</span
        >
        <span
          >Severability.ln the event any one or more ofthe provisions of these
          Terms is for any reasonheld to be invalid, illegal or unenforceable,
          inwhole or in part or in any respect, then and inany such event, such
          provision(s) only will bedeemed null and void and will not affect
          anyother provisions of these Terms, and theremaining provisions of
          these Terms willremain operative and in full force and effect.</span
        >
        <span
          >Assignment.Without our prior writtenconsent, you are prohibited from
          assigningthese Terms and any rights, duties, andobligations contained
          herein.However, weretain the right to freely assign or transferthese
          Terms,in whole or in part, without anylimitations.Third Party
          Rights.Unlessexpressly provided to the contrary in theseTerms, no
          third party (i.e. person who is notparty to these Terms) shall have
          any rights toenforce or to enjoy any benefit of any termscontained
          herein.</span
        >
        <span
          >No Waiver.Any failure by the Company toexercise any ofits respective
          rights, powers, orremedies under these Terms of Service, or anydelay
          by the Company in doing so, does notconstitute a waiver of any such
          right, power, orremedy. The single or partial exercise of anyright,
          power, or remedy by the Company doesnot prevent either from exercising
          any otherrights, powers, or remedies.</span
        >
        <span
          >Governing law.These Terms will be governedby and construed in
          accordance with the lawsof the Republic of Seychelles.</span
        >
        <span
          >Dispute Resolution. Any dispute, controversyor claim (including
          non-contractual disputes orclaims) arising out of or in connection
          withthese Terms or its subject matter or formationshall be governed by
          and construed inaccordance with the laws of the Republic ofSeychelles
          (with exclusion of any conflict oflaw rules that would lead to use of
          any otherlaws which are not the Republic of Seychelles)Each Party
          irrevocably agrees that the courtsof the Republic of Seychelles shall
          haveexclusive jurisdiction to settle any dispute orclaim(including
          non-contractual disputes orclaims) arising out of or in connection
          withthese Terms orits subject matter or formation.</span
        >
        <span>or</span>
        <span style="margin-bottom: 5rem"
          >Dispute resolution - Arbitration. Any dispute.controversy or claim
          arising out of or inrelation to these Terms, including the
          validityinvalidity, breach or termination thereof, shallbe submitted
          to mediation in accordance withthe Swiss Rules of Mediation of the
          SwissArbitration Centre in force on the date whenthe request for
          mediation was submitted inaccordance with these Rules.The seat
          ofthemediation shall be Zurich, Switzerland.Themediation shall be
          conducted in English.lfsuch dispute, controversy or claim has notbeen
          fully resolved by mediation within 60(sixty) days from the date when
          themediator(s)has(have) been confirmed orappointed by the Swiss
          Arbitration Centre, itshall be settled by arbitration in
          accordancewith the Swiss Rules ofInternationalArbitration of the Swiss
          Arbitration Centre inforce on the date when the Notice ofArbitration
          was submitted in accordance withthose Rules.The number of arbitrators
          shall bethree.The seat of the arbitration shall
          beZurich,Switzerland.The arbitrationproceedings shall be conducted in
          English</span
        >
        <span> First published on:04/08/2023</span>
        <span> Last revised on:04/08/2023</span>
      </div>
    </div>
    <div :class="gobot == '1' ? 'ypolicyend ypolicyzuid' : 'ypolicyend'">
      <span :class="gobot == '1' ? 'none' : ''" @click="srcollTobut()">{{
        $store.state.txt.policyend
      }}</span>
      <router-link
        to="/connect"
        :class="gobot == '1' ? 'ypolicybut yhoverpolicy' : 'none'"
      >
        {{ $store.state.txt.accept }}
      </router-link>
      <router-link to="" :class="gobot == '0' ? 'ypolicybut' : 'none'">
        {{ $store.state.txt.accept }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottom: 14424.7998046875,
      gobot: "0",
    };
  },
  methods: {
    handleScroll() {
      const scrollArea = this.$refs.scrollArea;
      // const scrollContent = this.$refs.scrollContent;

      const scrollContent = scrollArea.scrollHeight - scrollArea.clientHeight;
      console.log(scrollArea, scrollContent, scrollArea.scrollTop);
      if (Math.floor(scrollArea.scrollTop) == scrollContent) {
        this.gobot = "1";
        console.log("到底了");
      } else {
        this.gobot = "0";
      }
    },
    srcollTobut() {
      const scrollAreay = this.$refs.scrollArea;
      scrollAreay.scrollTop = scrollAreay.scrollHeight;
    },
    navigateBack() {
      this.$router.go(-1); // 向后导航一步
    },
  },
};
</script>

<style scoped>
.none {
  display: none !important;
}
.ypolicy {
  width: 100%;
  height: 100%;
  position: relative;
}

.yscroll {
  width: 82.5%;
  margin: 0.5rem auto 0;
  height: 78.5%;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.yscroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.yscroll::-webkit-scrollbar-track {
  background: rgb(177, 177, 177);
  border-radius: 2px;
}
.yscroll::-webkit-scrollbar-thumb {
  background: rgb(154, 221, 111);
  border-radius: 10px;
}
.yscroll::-webkit-scrollbar-corner {
  background: #204754;
}

.ypolicyend {
  width: 90%;
  height: 17.25%;
  margin: 0 auto;
}
.ypolicyzuid {
  height: auto;
}
.yscrollbox {
  width: 100%;
}
.yscrollbox > span {
  display: block;
  width: 100%;
  font-size: 0.8rem;
  font-weight: 550;
  margin-bottom: 1rem;
  word-wrap: break-word;
}

.ypolicyend > span {
  font-size: 0.8rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  margin: 0.5rem auto 1rem;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  border-radius: 2rem;
  background: rgb(148, 212, 107);
  cursor: pointer;
}

.ypolicyti {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  padding: 1rem 0;
}

.ypolicygb {
  font-size: 1.35rem;
  font-weight: 500;
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
}

.ypolicybut {
  display: block;
  text-align: center;
  width: 100%;
  padding: 1.25rem;
  background: rgb(177, 177, 177);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
}
.yhoverpolicy {
  background: rgb(154, 221, 111);
  color: black;
  margin-top: 3.65rem;
}
.yhoverpolicy:hover {
  background: rgb(148, 212, 107);
}
</style>
