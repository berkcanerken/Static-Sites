import React from 'react';
import {
  AccordionDetailsStyled,
  AccordionStyled,
  AccordionSummaryStyled,
  AccordionWrapperStyled,
} from './Accordion.styled';
import { ExpandMore } from '@mui/icons-material';
import { ClickAwayListener } from '@mui/material';

export type AccordionItemType = {
  question: string;
  answear: string;
};

type AccordionProps = {
  content: AccordionItemType[];
};

const Accordion: React.FC<AccordionProps> = ({ content }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean): void => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={(): void => setExpanded(false)}
    >
      <AccordionWrapperStyled>
        {content.map(({ question, answear }, index) => (
          <AccordionStyled
            key={question}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummaryStyled expandIcon={<ExpandMore />}>
              {question}
            </AccordionSummaryStyled>

            <AccordionDetailsStyled>{answear}</AccordionDetailsStyled>
          </AccordionStyled>
        ))}
      </AccordionWrapperStyled>
    </ClickAwayListener>
  );
};

export { Accordion };
