// Unique, state-specific highlight paragraphs for state pages.
// Every figure below comes from the verified entries in src/data/stateFees.ts.
// These paragraphs exist so state pages carry genuinely unique copy instead
// of only the shared template text.

export const STATE_HIGHLIGHTS: Record<string, string> = {
  delaware:
    "Delaware looks cheap at first glance — the Certificate of Formation is just $110. But the $400 annual LLC tax, due every June 1, is what actually defines the cost here: there is no annual report to file, yet that tax is due every year regardless, so a five-year total comes to $2,110. If you are weighing Delaware against a low-fee state, compare the ongoing tax, not the filing fee — that is where Delaware's real cost lives.",

  california:
    "California's $70 filing fee is one of the lowest in the country, and it is also the most misleading. Every LLC here pays a standard $800 annual tax, plus a $20 Statement of Information due within 90 days of registration and then every two years — so the recurring cost, not the formation fee, is the number to budget around. On top of that, additional fees can apply once your California-source income reaches $250,000, so the fixed-fee estimate here is a floor, not a ceiling.",

  wyoming:
    "Wyoming charges $100 to form an LLC and a $60 minimum for the annual report license tax, which keeps the yearly cost low and predictable. The wrinkle is that the license tax is the greater of $60 or 0.0002 multiplied by the LLC's qualifying assets located and employed in Wyoming — so a business with a larger Wyoming asset base can owe more than the minimum. The $60 figure in the calculator is that minimum; check your own asset position before treating it as your total.",

  montana:
    "Montana has the lowest formation fee in the country at $35, and right now the annual report costs nothing too: the state has waived the fee for on-time 2026 and 2027 reports. That waiver is temporary — the standard $35 report fee is expected to resume in 2028 unless the state extends it, and the report itself is still due every year by April 15. So Montana is genuinely cheap to start, but plan on the $35 annual fee returning.",

  texas:
    "Texas charges $300 to form an LLC, which is on the higher side — but after that, the state filing cost effectively stops. There is no annual report fee: you file an annual Public Information Report (or Ownership Information Report) at no state filing cost, and no franchise tax is due while your annualized total revenue stays under the 2026 no-tax-due threshold of $2.65 million. If your revenue grows past that threshold, franchise tax may apply and depends on your revenue, so the calculator's total is a starting point rather than a cap.",

  florida:
    "Florida's $125 filing fee covers your Articles of Organization and includes the registered agent designation, so there is no separate state charge for naming your agent. After that, the annual report is $138.75 every year — a flat, predictable cost with no franchise tax on top. What you pay in year one is close to what you pay in year five, which makes Florida one of the more straightforward states to budget for.",

  "new-york":
    "New York's state fees are modest: $200 to form and a $9 biennial statement every two years. The real cost driver is the publication requirement, which can add significant expense — especially in New York City counties — because it is set by the newspapers, not the state, and is not included in the fixed-fee totals here. Before you budget, get a publication quote for the county where you will form; it can dwarf the $200 filing fee.",

  nevada:
    "Nevada's headline number is the $425 typical initial cost, and it is worth seeing how it is built: $75 for the Articles of Organization, $150 for the initial list, and $200 for the state business license. The ongoing cost is around $350 a year for the annual list and license renewal. So while the $75 filing fee alone looks small, the real first-year cost is the bundle — and the recurring cost stays high, too.",

  ohio:
    "Ohio keeps things simple: a $99 filing fee and no annual report for LLCs at all. That means the price you pay to form is, in state-fee terms, the price you keep paying — $0 a year to stay in good standing with the Secretary of State. If you want a state where the ongoing paperwork is as light as the ongoing cost, Ohio's flat structure is the point.",

  missouri:
    "Missouri charges $45 to file online (paper filing is $100), and then it largely gets out of your way: LLCs do not file a routine annual report with the Secretary of State. That makes the five-year cost the same as the one-year cost in state fees, though other tax filings may still apply. Just be sure to file online — the paper route more than doubles the formation fee.",

  arizona:
    "Arizona charges $50 to form an LLC and requires no annual report, so your state cost ends at the filing fee. The one caveat is publication: some counties require you to publish notice of formation, and that cost is set locally rather than by the state, so it is not in the totals here. Check your county's publication rule before you file, or the $50 headline figure will understate your real first-year cost.",

  "new-mexico":
    "New Mexico charges $50 to form an LLC and no annual report fee at all, so the filing fee is the whole state cost — there is nothing to pay each year to stay in good standing. That flat, one-time structure is what makes New Mexico stand out: unlike most states, the number never grows after formation. As with any state, though, forming here only saves money if you actually operate here; forming out of state and doing business at home usually means paying twice.",

  illinois:
    "Illinois sits in the middle on formation at $150, but the $75 annual report is the number that matters over time: after two years, the reports alone add up to the $150 you paid to form, and over five years the recurring fees ($375) come to two and a half times the filing fee, bringing the total to $525. There is no franchise tax on top, so the annual report is the whole ongoing story — budget $75 every year, not $150 once.",

  nebraska:
    "Nebraska's headline is a $100 filing fee online ($110 if you file in person), but its reporting cycle is the unusual part: the $30 report is biennial, not annual, and it falls due in the first odd-numbered year after your formation year, then every other odd-numbered year. That two-year rhythm is why the five-year total stays low at $160 — just $60 of recurring fees across five years. Watch the odd-year due date and the publication requirement, which can add cost in year one and is not in the fixed-fee totals here.",
};
