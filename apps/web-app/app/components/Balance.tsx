"use client"

import { useBalance } from "@repo/store/useBalance";

export default function Balance() {
    const balance = useBalance();

    return(
        <div>
            hi from {balance}
        </div>
    )
    
}