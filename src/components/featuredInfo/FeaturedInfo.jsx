import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$20000</span>
                    <span className="featuredMoneyRate">
                        $-11.5
                        <ArrowDownward className="featuredIcon negative" />
                    </span>

                </div>
                <span className="featuredSub">Compared to last Months</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$500</span>
                    <span className="featuredMoneyRate">
                        $-1.5
                        <ArrowDownward className="featuredIcon negative" />
                    </span>

                </div>
                <span className="featuredSub">Compared to last Months</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3000</span>
                    <span className="featuredMoneyRate">
                        $+16.9
                        <ArrowUpward className="featuredIcon " />
                    </span>

                </div>
                <span className="featuredSub">Compared to last Months</span>
            </div>
        </div>
    )
}
