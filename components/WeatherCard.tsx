import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
//import IconPick from '../atoms/IconPick';

import { WiCelsius, WiHumidity } from "react-icons/wi";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const hourlyCast = (
    <div className="rounded-md bg-blue-700/20 w-full h-48">
      <ul className="flex divide-x-2 min-w-full h-full flex-nowrap overflow-scroll items-center align-middle text-xs">
        <li className="min-w-[5rem] relative flex flex-col h-full py-3 justify-between">
          <p>Hour</p>
          <p>
            degrees
            <WiCelsius
              style={{
                display: "inline-block",
                height: "1.25rem",
                width: "1.25rem",
                stroke: "white",
                fill: "white",
              }}
            />
          </p>
          {/* <IconPick iconName="windy"/> */}
          <p>Select icon from api</p>
          <p>
            <WiHumidity
              style={{
                display: "inline-block",
                height: "1.25rem",
                width: "1.25rem",
                stroke: "white",
                fill: "white",
              }}
            />
            Rain pro
          </p>
        </li>
        <li className="min-w-[5rem] relative flex flex-col h-full py-3 justify-between">
          2
        </li>
        <li className="min-w-[5rem] relative flex flex-col h-full py-3 justify-between">
          3
        </li>
        <li className="min-w-[5rem] relative flex flex-col h-full py-3 justify-between">
          4
        </li>
        <li className="min-w-[5rem] relative flex flex-col h-full py-3 justify-between">
          5
        </li>
      </ul>
    </div>
  );

  return (
    <Card
      component="div"
      sx={{ maxWidth: 345, borderRadius: 2 }}
      style={{ backgroundColor: "#3AF3EC", textAlign: "center" }}
    >
      <CardHeader
        title="Your location is CITYNAME"
        component="h1"
        className="bg-[#3AF3EC]"
      />
      <CardContent>
        <>
          <div className="text-sm">
            <div className="block mb-5">
              <div className="flex justify-between">
                <div className="flex flex-col space-y-8">
                  <p>Today</p>
                  <p>Hour</p>
                </div>
                <div className="flex flex-col space-y-8">
                  <p>Icon</p>
                  <h3>
                    45
                    <WiCelsius
                      style={{
                        display: "inline-block",
                        height: "2rem",
                        width: "2rem",
                        stroke: "white",
                        fill: "white",
                      }}
                    />
                  </h3>
                </div>
                <div className="flex flex-col space-y-8">
                  <p>Weather condition</p>
                  <p>
                    Feels like ...
                    <WiCelsius
                      style={{
                        display: "inline-block",
                        height: "2rem",
                        width: "2rem",
                        stroke: "white",
                        fill: "white",
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <ul className="flex">{hourlyCast}</ul>
            <div className="flex items-right">
              <div className="w-1/3">asd</div>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                color="primary"
                sx={{ width: "50%" }}
                style={{marginLeft:"auto"}}
              >
                <Button style={{ backgroundColor: "#3AEC" }}>Daily</Button>
                <Button style={{ backgroundColor: "#3AEC" }}>Weekly</Button>
              </ButtonGroup>
            </div>
          </div>
        </>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>Weather details</CardContent>
      </Collapse>
    </Card>
  );
}
