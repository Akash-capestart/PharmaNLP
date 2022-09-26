import React from "react";

type QuoteSectionProps = {
  quote : string,
  action : string
}

export function QuoteSection({quote,action} : QuoteSectionProps) {
  return (
    <>
      <h1 className="text-green has-font-weight no-margin">{quote}</h1>
      <p className="text-dark-gray no-margin">{action}</p>
    </>
  );
}
