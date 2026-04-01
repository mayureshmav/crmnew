package com.crm.dto.request;

import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class QuotationRequest {
    private Long leadId;
    private Long customerId;
    private List<QuotationItemRequest> items;
    private BigDecimal discount;
    private String paymentSchedule;
    private String notes;

    @Data
    public static class QuotationItemRequest {
        private String itemName;
        private String description;
        private Integer quantity;
        private BigDecimal unitPrice;
        private BigDecimal taxPercent;
        private Long vendorId;
    }
}