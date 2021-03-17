import React from "react";
import { Card } from "react-bootstrap";
import Highlight from "react-highlight";

const AddonsAPIDoc = (props) => {
  const LinkFunction =
    '    Link(string packet, integer iNum, string sStr, key kID){\n        list packet_data = [ "pkt_type", packet, "iNum", iNum, "addon_name", g_sAddon, "sMsg", sStr, "kID", kID ];\n    \n        if (packet == "online" || packet == "update") // only add optin if packet type is online or update\n        {\n            packet_data += ["optin", llDumpList2String(g_lOptedLM, "~")];\n        }\n    \n        string pkt = llList2Json(JSON_OBJECT, packet_data);\n        if (g_kCollar != "" && g_kCollar != NULL_KEY)\n        {\n            llRegionSayTo(g_kCollar, API_CHANNEL, pkt);\n        }\n        else\n        {\n            llRegionSay(API_CHANNEL, pkt);\n        }\n    }';

  return (
    <div>
      <Card
        bg={props.dark ? "dark" : "light"}
        text={props.dark ? "white" : "dark"}
        style={{ width: "100vw" }}
      >
        <Card.Header>
          <center>Addons API Documentation</center>
        </Card.Header>
        <Card.Body>
          Addons were introduced in v8.0 as a way to bridge the gap between
          rezzed or inworld objects that are separate from the collar, but that
          still require a way to access the collar settings, or internal linked
          messages.
          <br />
          <br />
          The protocol uses a unique channel generated for every avatar, and
          JSON text for a dynamic structure that can be modified at a later date
          without breaking backward compatibility. The way you calculate the API
          Channel for an avatar is as follows:
          <br />
          <Highlight className="lsl">
            API_CHANNEL = ((integer)("0x" + llGetSubString((string)llGetOwner(),
            0, 8))) + 0xf6eb - 0xd2;
          </Highlight>
          <br />
          The Addons template contains a function that makes it quite easy to
          write a command to go to the collar.
          <Highlight className="lsl">{LinkFunction}</Highlight>
          <br />
          <br />
          The protocol accepts a variety of options in its current format. There
          are several packet types that require different options. In the below
          JSON, lists are used to denote any option that may have various
          different valid options.
          <br />
          <Highlight className="json">
            {
              '{\n\t"pkt_type": ["online", "offline", "from_collar", "from_addon", "ping", "pong"],\n\t"iNum": 0,\n\t"addon_name": "sample_addon",\n\t"sMsg": "menu",\n\t"kID": llGetOwner(),\n\t"optin": ""\n}'
            }
          </Highlight>
          The standard protocol is that only the collar should use a
          llRegionSay, but the addons should all utilize llRegionSayTo, and
          should limit the scope of the listen event to only listen to the
          collar ID.
          <br />
          For reference on what link messages you can send, and for
          documentation on what the parameters they take, see{" "}
          <a href="#/api/plugin">Plugin Documentation</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddonsAPIDoc;
